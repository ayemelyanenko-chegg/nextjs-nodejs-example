import { t } from "testcafe";
import config from "./config";
import * as sqnaLocators from "./locators";

//Navigate to SQNA
export async function navigateToSqna(
  questionId: string,
  experimentParams?: string
): Promise<void> {
  await t.navigateTo(
    `${config.cheggUrl}` +
      "homework-help/questions-and-answers/-q" +
      questionId +
      "?force-exp-unlimited_paq_test=control&" +
      experimentParams
  );
}

// SQNA Player is Visible
export async function sqnaPlayerVisible() {
  await t.expect(sqnaLocators.sqnaPlayer.exists).ok();
  console.log("SQNA player is visible");
}

// To click on tabs
export async function clickFirstStep() {
  await t.expect(sqnaLocators.firstStep.visible).ok();
  await t.click(sqnaLocators.firstStep);
}

export async function clickAllSteps() {
  await t.expect(sqnaLocators.allSteps.visible).ok();
  await t.click(sqnaLocators.allSteps);
}

export async function clickAnswerOnly() {
  await t.expect(sqnaLocators.AnswerOnly.visible).ok();
  await t.click(sqnaLocators.AnswerOnly);
  await t.wait(3000);
}

// to resize window to Large, Small, Medium, Extra Large
export async function resizeWindow(size: string) {
  if (size == "large") {
    await t.resizeWindow(900, 800);
  } else if (size == "medium") {
    await t.resizeWindow(600, 800);
  } else if (size == "small") {
    await t.resizeWindow(320, 800);
  } else {
    await t.resizeWindow(1200, 800);
  }
}

export async function stepControlTabIsVisible() {
  await t.expect(sqnaLocators.stepControlBar.exists).ok();
  console.log("SQNA control tab is visible");
}

// to verify step control tab icons
export async function stepControlIconIsVisible() {
  await t.expect(sqnaLocators.stepControlIconFirstStep.visible).ok();
  console.log("SQNA first step icon is visible");
  await t.expect(sqnaLocators.stepControlIconAllStep.visible).ok();
  console.log("SQNA All step icon is visible");
  await t.expect(sqnaLocators.stepControlIconAnswerOnly.visible).ok();
  console.log("SQNA Answer Only icon is visible");
}
// to verify side nav is being collapsed
export async function isSideNavCollapsed() {
  if (await sqnaLocators.sideNavCollapsed.exists) {
    console.log("side nav is collapsed");
  } else if (await sqnaLocators.sideNavOpen.exists) {
    console.log("side nav is open");
  }
}

export async function answerWithOutExplanationIsVisible() {
  await t.expect(sqnaLocators.verifyExplanation.exists).notOk();
  console.log("answer without explanation is displayed");
}

export async function clickStepsExpanding() {
  clickAnswerOnly();
  for (let i = 0; i < 10; i++) {
    await t.click(sqnaLocators.stepsDropDown.nth(i));
    await t.expect(sqnaLocators.stepAnswer.nth(i).exists).ok();
  }
}

export async function clickStepsCollapsing() {
  for (let i = 0; i < 10; i++) {
    await t.click(sqnaLocators.uparrow.nth(i));
    await t.expect(sqnaLocators.stepAnswer.nth(i).exists).notOk();
  }
}

export async function clickFinalAnswer() {
  await t.expect(sqnaLocators.finalAnswer.exists).ok();
  await t.click(sqnaLocators.finalAnswer);
}

export async function clickToExpandSideNav() {
  await t.click(sqnaLocators.sideNavCollapsed);
  await t.expect(sqnaLocators.sideNavOpen.exists).ok();
}
export async function clickHamBurger() {
  await t.click(sqnaLocators.hamBurger);
}

export async function verifyfirststepRetainsAfterRefresh() {
  await t.expect(sqnaLocators.verifyFirstStep.exists).ok();
}

export async function verifyFirstStepSelectedTab() {
  await t.expect(sqnaLocators.verifyFirstStep.visible).ok();
}

export async function ValidatePlot() {
  await t.expect(sqnaLocators.plotting.exists).ok();
  console.log("Plotting Exist");
  await t.expect(sqnaLocators.gridline.exists).ok();
  await t.expect(sqnaLocators.axisY.exists).ok();
  await t.expect(sqnaLocators.axisX.exists).ok();
  await t.expect(sqnaLocators.lineGraph.exists).ok();
  await t.expect(sqnaLocators.parabolaGraph.exists).ok();
}
export async function ValidatePlotwithOutGrid() {
  console.log("Plotting Exist");
  await t.expect(sqnaLocators.gridline.exists).notOk();
  await t.expect(sqnaLocators.axisY.exists).ok();
  await t.expect(sqnaLocators.axisX.exists).ok();
}
