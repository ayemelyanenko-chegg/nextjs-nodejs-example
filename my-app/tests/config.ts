const TEST_ENV = "test";
const PROD_ENV = "prod";
const STAGE_ENV = "stage";
const LOCAL_ENV = "local";

const EnvDomain: { [index: string]: any } = {
  [PROD_ENV]: "https://www.chegg.com/",
  [TEST_ENV]: "https://trunk.live.test.cheggnet.com/",
  [STAGE_ENV]: "https://stage.chegg.com/",
  [LOCAL_ENV]: "https://local.web.test.cheggnet.com/",
};

const CheggDomain: { [index: string]: any } = {
  [PROD_ENV]: "https://www.chegg.com/",
  [TEST_ENV]: "https://trunk.live.test.cheggnet.com/",
  [STAGE_ENV]: "https://www.chegg.com/",
  [LOCAL_ENV]: "https://trunk.live.test.cheggnet.com/",
  // local uses test domain
};

// If we are running the tests against a review app,
// Get the review app ID from the command line arg and
// set it in the querystring param.
const isReviewApp = process.env.IS_REVIEW_APP;
const reviewAppID = process.env.REVIEW_APP;
let baseUrl: string =
  EnvDomain[process.env.CHEGG_ENV ? process.env.CHEGG_ENV : LOCAL_ENV];
if (isReviewApp) {
  if (reviewAppID) {
    // If there is a review app ID
    // add querystring for review app.
    baseUrl = `${baseUrl}?review=${reviewAppID}`;
  } else {
    // If no review app ID
    // prompt the user to set a review app ID
    throw new Error(
      "When using this command you have to preface it with REVIEW_APP=<review app id>"
    );
  }
}

const cheggUrl: string =
  CheggDomain[process.env.CHEGG_ENV ? process.env.CHEGG_ENV : TEST_ENV];

const baseDomain: string =
  EnvDomain[process.env.CHEGG_ENV ? process.env.CHEGG_ENV : LOCAL_ENV];

export default { baseUrl, cheggUrl, baseDomain, isReviewApp, reviewAppID };
