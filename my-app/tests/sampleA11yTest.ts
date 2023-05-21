// @ts-ignore
import { t, Selector } from "testcafe";
const loginUrl = `https://www.easybib.com/login`;
export const emailForSignIn = Selector('input[id*="email"]');
export const passForSignin = Selector('input[type="password"]');
export const signInButton = Selector("button").withText("Sign in");
export const upgradeButton = Selector('button[aria-controls="accountMenu"]');
const a11y = require("./a11y.ts");

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

fixture`User log in and axe core client function failure`
  .meta({ fixtureID: "f-0001", author: "GROWTH", app: "" })
  .beforeEach(async (t) => {});

test.meta({
  testID: "t-0001",
})("User log in and axe core client function failure", async (t) => {
  await userLogInWithCredentials("test_email_chegg@chegg.com", "Password1");
  await t.expect(upgradeButton.visible).ok();
  await a11y(t);
});
