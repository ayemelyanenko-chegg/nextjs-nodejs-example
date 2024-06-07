import * as path from "path";
import { ClientFunction, Selector, t } from "testcafe";
export const emailForSignIn = Selector('input[id*="email"]');
export const passForSignin = Selector('input[type="password"]');
export const signInButton = Selector("button").withText("Sign in");
export const getStartedButton = Selector("span").withExactText("Get started");
const upload = Selector('div[data-test="file-upload-area-upload-drop-zone"]');
const fileUploadStatusModal = Selector("#notes-upload-status-modal");
const frame = Selector('iframe[name="CodePen"]');
const btnWithText = Selector("button").withText("Upload a file...");
const uploadOntoCanvas = Selector(
  'input[data-test = "file-upload-area-hidden-input-area"]'
);
const pathToFile = path.resolve(__dirname, `./sample_image.jpeg`);
const nextModal = Selector('div[id="notes-upload-status-modal"]');

export const checkScrollEvent = ClientFunction(() => {
  return new Promise((resolve) => {
    window.addEventListener(
      "scroll",
      () => {
        resolve(true); // Resolve the Promise when scroll event occurs
      },
      { once: true }
    ); // Use { once: true } to remove the listener after the first scroll event
  });
});

// user log in
async function userLogInWithCredentials(
  email: string,
  password: string
): Promise<void> {
  await t.setNativeDialogHandler(() => true);
  await t.navigateTo(
    "https://www.chegg.com/auth?redirect=https%3A%2F%2Fwww.chegg.com%2F"
  );
  await t
    .typeText(emailForSignIn, email, { paste: true })
    .typeText(passForSignin, password, { paste: true })
    .click(signInButton)
    .wait(6000);
}

fixture`Tests should not hang`
  .meta({
    author: "PLA",
    app: "",
  })
  .beforeEach(async (t) => {
    await userLogInWithCredentials("test_user_upload@chegg.us", "Password@1");
    await t.navigateTo("/pla/notesbychegg");
    await t.eval(() => {
      document.addEventListener("DOMContentLoaded", () => {
        const originalOpen = window.open;
        window.open = function (url, target, features) {
          return originalOpen.call(window, url, target, features);
        };
      });
    });
  });

test.meta({
  testID: "t-0001",
})("Tests should not hang", async (t) => {
  await t.click(getStartedButton);
  const scrollOccurred = await checkScrollEvent();
  // Assert that the scroll event occurred. Page should scroll to the upload container
  await t.expect(scrollOccurred).ok("Scroll event did not occur");
  await t.clearUpload(uploadOntoCanvas);

  await t.setFilesToUpload(uploadOntoCanvas, pathToFile);
  await t
    .expect(fileUploadStatusModal.exists)
    .ok()
    .expect(fileUploadStatusModal.visible)
    .ok();
});

test.meta({
  testID: "t-0002",
})("Tests should not hang", async (t) => {
  await t.click(getStartedButton);
  const scrollOccurred = await checkScrollEvent();
  // Assert that the scroll event occurred. Page should scroll to the upload container
  await t.expect(scrollOccurred).ok("Scroll event did not occur");
  await t.clearUpload(uploadOntoCanvas);
  await t.setFilesToUpload(uploadOntoCanvas, pathToFile);
  await t
    .expect(fileUploadStatusModal.exists)
    .ok()
    .expect(fileUploadStatusModal.visible)
    .ok();
});

test.meta({
  testID: "t-0002",
})("Tests should not hang", async (t) => {
  await t.click(getStartedButton);
  const scrollOccurred = await checkScrollEvent();
  // Assert that the scroll event occurred. Page should scroll to the upload container
  await t.expect(scrollOccurred).ok("Scroll event did not occur");
  await t.clearUpload(uploadOntoCanvas);

  await t.setFilesToUpload(uploadOntoCanvas, pathToFile);
  await t
    .expect(fileUploadStatusModal.exists)
    .ok()
    .expect(fileUploadStatusModal.visible)
    .ok();
});
