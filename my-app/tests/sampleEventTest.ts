import { ClientFunction, RequestLogger, t } from 'testcafe';
import { expect } from 'chai';
import { merge } from 'lodash';
const isSubset = require('is-subset');

export interface event {
  cloud_events_version?: string;
  content_type?: string;
  data?: any;
  event_id?: string;
  event_time?: string;
  event_type: string;
  event_type_version?: string;
  extensions?: {
    client_common?: {
      adobe_mcid?: string;
      analytics_module_version?: string;
      auth_state?: string;
      base_event_type?: string;
      base_event_version?: string;
      browser_name?: string;
      browser_version?: string;
      chegg_session_id?: number;
      chegg_visitor_id?: string;
      chegg_uuid?: string;
      platform?: string;
      referral_url?: string;
      test_cells?: [];
      url?: string;
      user_subscription_status?: [];
      view?: {
        experience?: string;
        property?: string;
        feature?: string;
        view_name?: string;
        view_version?: string;
      };
      view_previous?: {
        experience?: string;
        property?: string;
        view_name?: string;
        view_version?: string;
      };
    };
  };
  source: string;
}

const server = process?.env?.CHEGG_ENV?.toUpperCase();

const rioUrl =
  server == 'PROD' || server == 'STAGE'
    ? 'https://analytics.chegg.com/rio-service-web/rest/rio-events/batch'
    : 'https://analytics.test.cheggnet.com/rio-service-web/rest/rio-events/batch';

const rioLogger = RequestLogger(
  { url: rioUrl, method: 'POST' },
  {
    logRequestHeaders: true,
    logRequestBody: true,
    stringifyRequestBody: true,
  }
);

interface RioEventVerify {
  locator: Object;
  event: Object;
}

async function verifyRioEventv2(
  expected: RioEventVerify
): Promise<void> {
  let foundEvents: event[] = await Promise.all(
    rioLogger.requests.map(async (r: any) => {
      const body = JSON.parse(r.request.body);

      for (const subevent of body) {
        if (isSubset(subevent, expected.locator)) return subevent;

        continue;
      }
    })
  );

  foundEvents = foundEvents.filter((event) => event !== undefined);

  await t
    .expect(foundEvents.length)
    .gt(
      0,
      `Rio event was not found! With the following locator ${JSON.stringify(
        expected.locator
      )}`
    );

  const firstEvent: any = foundEvents[0];
  const expectedEvent: any = merge({}, firstEvent, expected.event);
  await expect(firstEvent).to.deep.include(
    expectedEvent,
    ` Locator: ${JSON.stringify(expected.locator)}`
  );
}

const homepageNavbarComponentViewEvent: RioEventVerify = {
  event: {
    data: {
      component_view: {
        component: {
          name: 'check out our demo page',
          text: 'Check out our demo page',
          type: 'link',
        },
      },
    },
    event_type: 'net.citationmachine.clickstream_component_view',
    event_type_version: '3',
  },
  locator: {
    data: {
      component_view: {
        component: {
          name: 'check out our demo page',
          text: 'Check out our demo page',
          type: 'link',
        },
      },
    },
  },
};

fixture('Event test')
    .page('https://www.citationmachine.net/');

test.meta({
        testID: 't-0001',
        testType: 'Smoke',
        testRailCaseId: '00000',
        priority: 'p1',
      })
      .requestHooks(rioLogger)('Event test', async t => {
   await t.wait(20000);
   await verifyRioEventv2(homepageNavbarComponentViewEvent);
});