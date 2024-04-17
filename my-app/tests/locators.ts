import { Selector } from "testcafe";

export const elementByXPath = Selector((xpath) => {
  const iterator = document.evaluate(
    xpath,
    document,
    null,
    XPathResult.UNORDERED_NODE_ITERATOR_TYPE,
    null
  );
  const items = [];

  let item = iterator.iterateNext();

  while (item) {
    items.push(item);
    item = iterator.iterateNext();
  }

  return items;
});

export const homeSectionInputTextArea = Selector(
  '[data-test="cheggmate-home-section-input-section-input-section-textarea-textarea"]'
);

export const homeSectionSubmitButton = Selector(
  '[data-test="cheggmate-home-section-input-section-input-section-submit-button"]'
);

export const chatSectionSubmitLoadingButton = Selector(
  '[data-test="chat-section-chat-actions-panel-submit-button-loading"]'
);

export const chatSectionSubmitButton = Selector(
  '[data-test="chat-section-chat-actions-panel-submit-button"]'
);

export const chatSectionActionSystemMessageOne = Selector(
  '[data-test="chat-section-message-2-actions-system-message-action-0"]'
);

export const chatSectionActionSystemFourMessageOne = Selector(
  '[data-test="chat-section-message-4-actions-system-message-action-0"]'
);

export const chatSectionActionSystemMessageTwo = Selector(
  '[data-test="chat-section-message-2-actions-system-message-action-1"]'
);

export const chatSectionInputTextArea = Selector(
  '[data-test="chat-section-chat-actions-panel-textarea-textarea"]'
);

export const chatSectionStartNewChatButton = Selector(
  '[data-test="chat-page-new-chat"]'
);

export const chatSectionMessageTwoQnA = Selector(
  '[data-test="chat-section-message-2-primary"] div'
);

export const chatSectionMessageThree = Selector(
  '[data-test="chat-section-message-3-primary"] p'
);

export const chatSectionMessageFour = Selector(
  '[data-test="chat-section-message-4-primary"] p'
);

export const chatSectionFlashcardNextButton = Selector(
  '[aria-label="Next flashcard"]'
);

export const chatSectionMessageTwoStepByStepSelectionMenu = Selector(
  '[data-test="chat-section-message-2-step-by-step-solution-selection-menu"]'
);

export const chatSectionMultipleChoiceAButton = Selector(
  '[data-test="chat-section-message-4-multiple-choice-question-choice-0"]'
);

export const chatSectionMultipleChoiceBButton = Selector(
  '[data-test="chat-section-message-4-multiple-choice-question-choice-1"]'
);
export const chatSectionMultipleChoiceCButton = Selector(
  '[data-test="chat-section-message-4-multiple-choice-question-choice-2"]'
);
export const chatSectionMultipleChoiceDButton = Selector(
  '[data-test="chat-section-message-4-multiple-choice-question-choice-3"]'
);

export const chatSectionRelatedTopicsOne = Selector(
  '[data-test="chat-section-message-2-related-topics-section-topic-button-0"]'
);

export const chatSectionRelatedTopicsTwo = Selector(
  '[data-test="chat-section-message-2-related-topics-section-topic-button-1"]'
);

export const chatSectionRelatedTopicsTitle = Selector(
  '[data-test="chat-section-message-2-related-topics-section"] h2'
);

export const emailForSignIn = Selector('input[id*="email"]');
export const passForSignin = Selector('input[type="password"]');
export const signInButton = Selector("button").withText("Sign in");

export const sqnaPlayer = Selector(
  "*[data-test='qna-structured-answer-default']"
);
export const nosqnaFormat = Selector("span").withText("See the answer");
export const firstStep = Selector('*[role="radio"]').withText("1st step");
export const allSteps = Selector('*[role="radio"]').withText("All steps");
export const AnswerOnly = Selector("*[role='radio']").withText("Answer only");
export const stepControlIconFirstStep = Selector(
  elementByXPath("//div[text()='1st step']//*[contains(@class,'icon')]")
);
export const stepControlIconAllStep = Selector(
  elementByXPath("//div[text()='All steps']//*[contains(@class,'icon')]")
);
export const stepControlIconAnswerOnly = Selector(
  elementByXPath("//div[text()='Answer only']//*[contains(@class,'icon')]]")
);
export const sideNavCollapsed = Selector(
  '*[data-test="side-nav-chevron-arrow-right"]'
);
export const sideNavOpen = Selector(
  "*[data-test='side-nav-chevron-arrow-left']"
);
export const hamBurger = Selector(
  "*[data-test='mobile-nav-controller-menu-button']"
);
export const stepControlBar = Selector("[class*='StepControlTabs']");
export const verifyExplanation = Selector("a").withText("Explanation");
export const stepsDropDown = Selector(
  '*[data-test="qna-structured-answer-step-header"]'
);
export const downarrow = Selector('[pointing="down"]');
export const uparrow = Selector('[pointing="up"]');
export const stepAnswer = Selector('[class="sc-1aslxm9-0 bIFYYA"]');
export const finalAnswer = Selector(
  '[data-test="qna-structured-answer-final-step"]'
);
export const verifyFirstStep = Selector('[aria-checked="true"]').withText(
  "1st step"
);
export const peroff = Selector('data-button-id="1"');
export const basicImage = Selector('data-test="block-1-image"');

export const qnaSocialProofCardSuperscript = Selector("sup").withText("1");

export const qnaPostAQuestionCard = Selector(
  '[data-test="non-sub-right-rail-variant-3-card-test-id"]'
);
export const qnaPostAQuestionCardLink = Selector(
  '[data-test="non-sub-right-rail-variant-3-link-text-test-id"]'
);
export const sqnaAnswerPreviewModeWrap = Selector(
  '[data-test="qna-structured-answer-preview-mode-wrap"]'
);
export const plotting = Selector(
  '[data-test="structured-answer-content-block"][[data-test="svg"]'
);
export const gridline = Selector('[data-test="gridlines"]');
export const axisY = Selector('[data-test="axis-yAxis"]');
export const axisX = Selector('[data-test="axis-xAxis"]');
export const lineGraph = Selector('[data-test="graph-VmKgGtii9ORr_R-zN9soj"]');
export const parabolaGraph = Selector(
  '[data-test="graph-aZRsO4y6I8UFdDOehCMLt"]'
);
