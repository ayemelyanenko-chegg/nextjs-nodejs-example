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

const mockDate = `
    Date.prototype.getTime = function () {
        return 42;
    };
`;

fixture`Script test`
  .meta({
    fixtureID: "f-0001",
  })
  .beforeEach(async (t) => {
    await userLogInWithCredentials(
      "sample_script_user@chegg.com",
      "Password@123@123"
    );
  });

// this test doesn't hang after a sign in attempt
test("My test 2", async (t) => {
  console.log(
    "user able to log in as the client script is not attached to test"
  );
  await t.expect(closeButton.visible).ok();
});
