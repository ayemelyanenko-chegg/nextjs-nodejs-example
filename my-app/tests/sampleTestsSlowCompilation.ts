import { sqnaSubEmail, sqnaSubPassword } from "./constants";
import * as sqnaHelpers from "./sqnaHelpers";

const roles = require("./roles");

fixture`subscriber navigating to SQNA page`.beforeEach(async (t) => {
  // SQNAPlayer login
  await t.useRole(roles.userRole(sqnaSubEmail, sqnaSubPassword));
});
test.meta({ priority: "p1", testID: "t0001", testRailCaseId: "000000" })(
  "Accessibility Test for subscriber navigating to Sqna page",
  async (t) => {
    sqnaHelpers.navigateToSqna("54948621");
    sqnaHelpers.sqnaPlayerVisible();
  }
);

test.meta({ priority: "p1", testID: "t0002", testRailCaseId: "000000" })(
  "Accessibility Test for subscriber navigating to Sqna page upon expanding side nav",
  async (t) => {
    sqnaHelpers.navigateToSqna("54948621");
    sqnaHelpers.clickToExpandSideNav();
  }
);

test.meta({ priority: "p1", testID: "t0003", testRailCaseId: "000000" })(
  "Accessibility Test for subscriber navigating to Sqna page upon clicking 1st step, all steps and answer only",
  async (t) => {
    sqnaHelpers.navigateToSqna("54948621");
    sqnaHelpers.clickFirstStep();
    sqnaHelpers.clickAllSteps();
    sqnaHelpers.clickAnswerOnly();
  }
);

test.meta({ priority: "p1", testID: "t0004", testRailCaseId: "000000" })(
  "Accessibility Test for subscriber navigating to Sqna accessing image type answer",
  async (t) => {
    sqnaHelpers.navigateToSqna("98767198");
    sqnaHelpers.clickAllSteps();
  }
);
