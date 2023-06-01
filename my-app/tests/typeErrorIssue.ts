import { t, Selector } from "testcafe";
const loginUrl = `https://www.chegg.com/auth?action=login`;
const emailForSignIn = Selector('input[id*="email"]');
const passForSignin = Selector('input[type="password"]');
const signInButton = Selector("button").withText("Sign in");
const closeButton = Selector('*[aria-label="Cancel"]');

// user log in/log out methods
async function userLogInWithCredentials(
  email: string,
  password: string
): Promise<void> {
  await t.navigateTo(loginUrl);
  await t
    .typeText(emailForSignIn, email, { paste: true })
    .typeText(passForSignin, password, { paste: true })
    .click(signInButton)
    .wait(6000);
  console.log(`Logged in as user: ${email}`);
}

/**
 Sets TestCafe config options.  This is based on the implementation of the configure function in testing-library/testcafe.
 Needed a more flexible option to assign a page for the option(s)
 One config example to pass in: {testIdAttribute: "data-test"}
 */
const configTestOptions = (
    pageRegEx: string,
    options: Record<string, unknown>
  ): Record<string, unknown> => {
    return {
      page: RegExp(pageRegEx),
      content: `window.TestingLibraryDom.configure(${JSON.stringify(options)})`,
    };
  };


fixture`Test with script`
  .clientScripts([
    {
      page: /\/.*/,
      module: '@testing-library/dom/dist/@testing-library/dom.umd.js',
    },
    configTestOptions('/.*', { testIdAttribute: 'data-test' }),
  ])
  .before(async () => {
    console.log(`Test Automation`);
  })
  .beforeEach(async (t) => {
    const tname = await (t as { [key: string]: any }).testRun.test.name;
    console.log(`**Running Test: ${tname}**`);
  });

test.meta({
    priority: 'p1',
    testRailCaseId: '288525',
  })(
    'Login test',
    async (t: TestController) => {
        await userLogInWithCredentials('test_email_chegg@chegg.com', 'Password1');
    }
  );

  test.meta({
    priority: 'p1',
    testRailCaseId: '288525',
  })(
    'Login test',
    async (t: TestController) => {
        await userLogInWithCredentials('test_email_chegg@chegg.com', 'Password1');
    }
  );

  test.meta({
    priority: 'p1',
    testRailCaseId: '288525',
  })(
    'Login test',
    async (t: TestController) => {
        await userLogInWithCredentials('test_email_chegg@chegg.com', 'Password1');
    }
  );

  test.meta({
    priority: 'p1',
    testRailCaseId: '288525',
  })(
    'Login test',
    async (t: TestController) => {
        await userLogInWithCredentials('test_email_chegg@chegg.com', 'Password1');
    }
  );

  test.meta({
    priority: 'p1',
    testRailCaseId: '288525',
  })(
    'Login test',
    async (t: TestController) => {
        await userLogInWithCredentials('test_email_chegg@chegg.com', 'Password1');
    }
  );

