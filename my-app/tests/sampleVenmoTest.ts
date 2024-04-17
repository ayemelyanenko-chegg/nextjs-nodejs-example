import { t, ClientFunction, Selector } from "testcafe";
const loginUrl = `https://www.chegg.com/auth?action=login`;
const emailForSignIn = Selector('input[id*="email"]');
const passForSignin = Selector('input[type="password"]');
const signInButton = Selector("button").withText("Sign in");
const seeAnswer = Selector("span").withText("See Answer");
const studyPack = Selector('button[data-test="product-CSP-button"]');
const startVenmo = Selector('*[aria-label="Start Venmo"]');
const VenmoNextBtn = Selector('*[data-testid="button-next"]');
const VenmoEnterPassCTA = Selector('[data-testid="loginWithPasswordInstead"]');
const VenmoCardLogo = Selector('[data-test="VENMO_CARD_LOGO"]');

const addQueryStringParamToUrl = (url: string, querystring: string): string => {
  const myURL = new URL(url);
  myURL.search = myURL.search ? myURL.search + "&" + querystring : querystring;
  return myURL.href;
};

const forceControlExperimentQueryParams =
  "?force-exp-unlimited_paq_test=control" +
  "&force-exp-paq_framing_experiments_test=control";
const expertQnAUrl =
  `https://www.chegg.com/` +
  "homework-help/questions-and-answers/question-13-q53369801" +
  forceControlExperimentQueryParams;

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

fixture`User log in`
  .meta({ fixtureID: "f-0001", author: "GROWTH", app: "" })
  .beforeEach(async (t) => {});

test.meta({
  testID: "t-0001",
})("Sign in", async (t) => {
  await userLogInWithCredentials(
    "sample_venmo_user@chegg.com",
    "Password@123@123"
  );
  await t.navigateTo(addQueryStringParamToUrl(expertQnAUrl, `setCountry=US`));
  await t.click(seeAnswer);
  await t.click(studyPack);
  const getURL = await ClientFunction(() => window.location.href)();
  const newUrl = getURL + "&force-exp-venmo_payment_method_test=test";
  await t.navigateTo(newUrl);
  await t.navigateTo(newUrl);
  // the below doesn't always work on first click, clicking twice as workaround
  await t.click(startVenmo);
  await t.click(startVenmo);
  await t.wait(5000);
  await t.typeText("#email", "sampleApp154154@hotmail.com").pressKey("enter");
  await t.click(VenmoEnterPassCTA);
  await t
    .typeText('[data-testid="text-input-password"]', "!Venmo10")
    .pressKey("enter")
    .wait(7000);
  await t.expect(VenmoCardLogo.visible).ok();
});
