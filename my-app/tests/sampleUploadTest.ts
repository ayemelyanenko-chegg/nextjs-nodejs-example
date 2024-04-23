import * as path from "path";
import { Selector, t } from "testcafe";
export const emailForSignIn = Selector('input[id*="email"]');
export const passForSignin = Selector('input[type="password"]');
export const signInButton = Selector("button").withText("Sign in");
const letsGetStartedBtn = Selector("span").withText("Get started");
const upload = Selector('div[data-test="file-upload-area-upload-drop-zone"]');
const uploadOntoCanvas = Selector('input[type="file"]');
const pathToFile = path.resolve(__dirname, `./dummy.pdf`);
const nextModal = Selector('div[id="notes-upload-status-modal"]');

// user log in
async function userLogInWithCredentials(
  email: string,
  password: string
): Promise<void> {
  await t.navigateTo(
    "https://www.chegg.com/auth?redirect=https%3A%2F%2Fwww.chegg.com%2F"
  );
  await t
    .typeText(emailForSignIn, email, { paste: true })
    .typeText(passForSignin, password, { paste: true })
    .click(signInButton)
    .wait(6000);
  console.log(`Logged in as user: ${email}`);
}

fixture`Next steps after upload should work`;
test.meta({
  testID: "t-0001",
})("Next steps after upload should work", async (t) => {
  await userLogInWithCredentials("test_user_upload@chegg.us", "Password@1");
  await t.navigateTo("/pla/powernotes");
  await t.click(letsGetStartedBtn);
  await t.setFilesToUpload(uploadOntoCanvas, pathToFile);
  // upload is seemingly there but the next step where the modal should appear never happens
  await t.expect(nextModal.visible).ok();
});
