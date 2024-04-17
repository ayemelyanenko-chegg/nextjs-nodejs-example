import config from "./config";
import {
  cheggMateUserPassword,
  cheggMateUserProd,
  cheggMateUserTest,
  userPassword,
} from "./constants";
import * as locators from "./locators";

const roles = require("./roles");

fixture`CheggMate tests `
  .meta({
    fixtureID: "f-0001",
    author: "GDG",
    app: "",
  })
  .beforeEach(async (t) => {
    if (process.env.CHEGG_ENV === "local" || process.env.CHEGG_ENV === "test") {
      await t.useRole(roles.userRole(cheggMateUserTest, cheggMateUserPassword));
    } else {
      await t.useRole(roles.userRole(cheggMateUserProd, userPassword));
    }
    await t.navigateTo(`${config.baseUrl}` + `cheggmate/chat/experience`);
  });

test.meta({
  testID: "t-0001",
  testType: "Smoke",
  testRailCaseId: "",
  priority: "p1",
})("CheggMate - Validate definition flows", async (t) => {
  await t
    .expect(locators.chatSectionInputTextArea.visible)
    .ok()
    .click(locators.chatSectionInputTextArea)
    .typeText(
      locators.chatSectionInputTextArea,
      "what are absolute extreme values?"
    )
    .click(locators.chatSectionSubmitButton)
    .wait(30000);

  await t.click(locators.chatSectionActionSystemMessageOne).wait(80000);
  await t
    .expect(locators.chatSectionMessageThree.innerText)
    .contains("Study with flashcards.");
  await t.expect(locators.chatSectionFlashcardNextButton.visible).ok();
  await t
    .click(locators.chatSectionStartNewChatButton)
    .click(locators.chatSectionInputTextArea)
    .typeText(
      locators.chatSectionInputTextArea,
      "what are absolute extreme values?"
    )
    .click(locators.chatSectionSubmitButton)
    .wait(30000);
  await t.click(locators.chatSectionActionSystemMessageTwo).wait(30000);
  await t
    .expect(locators.chatSectionMessageThree.innerText)
    .contains("Give me an example.")
    .expect(locators.chatSectionMessageFour.visible)
    .ok();
});

test.meta({
  testID: "t-0002",
  testType: "Smoke",
  testRailCaseId: "",
  priority: "p1",
})("CheggMate - Validate step-by-step flows", async (t) => {
  await t
    .expect(locators.chatSectionInputTextArea.visible)
    .ok()
    .click(locators.chatSectionInputTextArea)
    .typeText(
      locators.chatSectionInputTextArea,
      "In the New York city, the metro train arrive in the station at every 27 minutes. A person arrives at the station randomly. Calculate the mean and the variance of the waiting time of the person."
    )
    .click(locators.chatSectionSubmitButton)
    .wait(90000);
  await t
    .expect(locators.chatSectionMessageTwoStepByStepSelectionMenu.visible)
    .ok()
    .click(locators.chatSectionActionSystemMessageOne)
    .wait(50000);
  await t
    .expect(locators.chatSectionMessageThree.innerText)
    .contains("Let’s practice.");
  await t
    .expect(locators.chatSectionMultipleChoiceAButton.visible)
    .ok()
    .expect(locators.chatSectionMultipleChoiceBButton.visible)
    .ok()
    .expect(locators.chatSectionMultipleChoiceCButton.visible)
    .ok()
    .expect(locators.chatSectionMultipleChoiceDButton.visible)
    .ok();
});

test.meta({
  testID: "t-0003",
  testType: "Smoke",
  testRailCaseId: "",
  priority: "p1",
})("CheggMate - Validate expert QnA flows", async (t) => {
  await t
    .expect(locators.chatSectionInputTextArea.visible)
    .ok()
    .click(locators.chatSectionInputTextArea);
  if (process.env.CHEGG_ENV === "local" || process.env.CHEGG_ENV === "test") {
    await t.typeText(
      locators.chatSectionInputTextArea,
      "Show me a step by step way to solve for x + 17 = 4"
    );
  } else {
    await t.typeText(
      locators.chatSectionInputTextArea,
      "Susan has a credit card with an APR of 7.2%. For the billing period ending on June 5, average daily balance (ADB) on her credit card was $100.31. What is monthly finance charge for that billing cycle?"
    );
  }
  await t.click(locators.chatSectionSubmitButton).wait(3000);
  await t
    .expect(locators.chatSectionMessageTwoQnA.innerText)
    .contains("Here's some guidance from a Chegg Expert:");
  await t.click(locators.chatSectionActionSystemMessageOne).wait(50000);
  await t
    .expect(locators.chatSectionMessageThree.innerText)
    .contains("Let’s practice.");
  await t
    .expect(locators.chatSectionMultipleChoiceAButton.visible)
    .ok()
    .expect(locators.chatSectionMultipleChoiceBButton.visible)
    .ok()
    .expect(locators.chatSectionMultipleChoiceCButton.visible)
    .ok()
    .expect(locators.chatSectionMultipleChoiceDButton.visible)
    .ok();
});

test.meta({
  testID: "t-0004",
  testType: "Smoke",
  testRailCaseId: "",
  priority: "p1",
})("CheggMate - Validate related topics flows", async (t) => {
  await t
    .expect(locators.chatSectionInputTextArea.visible)
    .ok()
    .click(locators.chatSectionInputTextArea)
    .typeText(
      locators.chatSectionInputTextArea,
      "In the New York city, the metro train arrive in the station at every 27 minutes. A person arrives at the station randomly. Calculate the mean and the variance of the waiting time of the person."
    )
    .click(locators.chatSectionSubmitButton)
    .wait(90000);
  await t
    .expect(locators.chatSectionRelatedTopicsTitle.innerText)
    .contains("Learn more about:")
    .click(locators.chatSectionRelatedTopicsOne)
    .wait(80000);
  await t.expect(locators.chatSectionActionSystemFourMessageOne.visible).ok();
});
