import {t, Selector} from 'testcafe';
const loginUrl = `https://www.easybib.com/login`;
export const emailForSignIn = Selector('input[id*="email"]');
export const passForSignin = Selector('input[type="password"]');
export const signInButton = Selector('button').withText('Sign in');
export const upgradeButton = Selector('button[aria-controls="accountMenu"]');

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
  .meta({ fixtureID: 'f-0001', author: 'GROWTH', app: '' })
  .beforeEach(async (t) => {});

test.meta({
  testID: 't-0001',
})(
  'Sign in',
  async (t) => {
    await userLogInWithCredentials('test_email_chegg@chegg.com', 'Password1');
    await t
          .expect(upgradeButton.visible)
          .ok();
 });