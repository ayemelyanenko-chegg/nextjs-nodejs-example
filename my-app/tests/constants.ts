const fs = require("fs");

// testcafe credentials
interface ExpectedTestCafeCredentials {
  userEmail: string;
  userEmailAlternate: string;
  userPassword: string;
  noCourseUserPassword: string;
  noCourseUserEmail: string;
  nonSubUserEmail: string;
  nonSubUserPassword: string;
  nonSubscribeUserEmail: string;
  noTbsSolutionsUserEmail: string;
  noTbsSolutionsUserPassword: string;
  csUserAuth: string;
  nonSubUserMopEmail: string;
  nonSubUserMopPassword: string;
  uversityUserEmail: string;
  uversityUserPassword: string;
  examPrepEmail: string;
  examPrep2Email: string;
  cheggMateUserProd: string;
  cheggMateUserTest: string;
  cheggMateUserPassword: string;
  examPrep2Password: string;
  a11yUserEmail: string;
  csCanceledUserEmail: string;
  commerceCSCanceledUserEmail: string;
  csCanceledUserPassword: string;
  cspCanceledUserEmail: string;
  commerceCSPCanceledUserEmail: string;
  cspCanceledUserPassword: string;
  csPausedUserEmailTest: string;
  commerceCSPausedUserEmail: string;
  csPausedUserEmailProd: string;
  csPausedUserPasswordProd: string;
  mathPaidUserEmail: string;
  mathPaidUserPassword: string;
  wtApplitoolsAPIKey: string;
  wtPaidUserEmail: string;
  wtPaidUserPassword: string;
  wtFreeUserEmail: string;
  wtFreeUserPassword: string;
  sqnaSubEmail: string;
  sqnaSubPassword: string;
  sqnaNonSubPassword: string;
  sqnaNonSubEmail: string;
  csSubUser: string;
  doordashSubEmail: string;
  csSubUserPassword: string;
  csPendingPauseUserEmail: string;
  commerceCSPendingPauseUserEmail: string;
  csPendingPauseUserPassword1: string;
  csPendingCancelUserEmail: string;
  commerceCSPendingCancelUserEmail: string;
  csPendingCancelUserPassword: String;
  cspPendingCancelUserEmail: string;
  commerceCSPPendingCancelUserEmail: string;
  commerceWTPaidUserEmail: string;
  pricingsdkProdKey: string;
  cspPendingCancelUserPassword: String;
  wtPaidApplitAxeUserEmail: String;
  wtPaidApplitAxePassword: String;
  wtFreeApplitAxeUserEmail: String;
  wtFreeApplitAxePassword: String;
  wtPaidUserExpertCheckFeedBackEmail: String;
  wtPaidUserExpertCheckFeedBackPassword: String;
  tbsSubEmail: String;
  tbsNonSubPassword: String;
  tbsNonSubEmail: String;
  tbsPausedEmail: String;
  tbsCancelledCSPEmail: String;
  qnaUserEmailPaid: String;
  qnaUserPaidPassword: String;
}

let testcafeCredentials: ExpectedTestCafeCredentials =
  {} as ExpectedTestCafeCredentials;
try {
  const rawTestcafeCredentials = fs.readFileSync(".testcafe-credentials.json");
  testcafeCredentials = JSON.parse(
    rawTestcafeCredentials
  ) as ExpectedTestCafeCredentials;
} catch (e: unknown) {
  if (!process.env.USER_EMAIL) {
    // We need to get the test user credentials from `.testcafef-credentials.json` if they are not
    // already set in the environment.
    // @ts-ignore
    console.warn(`Error: ${e.message}`);
    console.warn(
      "WARNING - you are missing .testcafe-credentials.json. See README."
    );
  }
}

export const userEmail = (process.env.USER_EMAIL ||
  testcafeCredentials.userEmail) as string;
export const userEmailAlternate = (process.env.USER_EMAIL_ALTERNATE ||
  testcafeCredentials.userEmailAlternate) as string;
export const userPassword = (process.env.USER_PASSWORD ||
  testcafeCredentials.userPassword) as string;
export const noCourseUserPassword = (process.env.NO_COURSE_USER_PASSWORD ||
  testcafeCredentials.noCourseUserPassword) as string;
export const noCourseUserEmail = (process.env.NO_COURSE_USER_EMAIL ||
  testcafeCredentials.noCourseUserEmail) as string;
export const nonSubUserEmail = (process.env.NON_SUB_USER_EMAIL ||
  testcafeCredentials.nonSubUserEmail) as string;
export const nonSubscribeUserEmail = (process.env.NON_SUBSCRIBE_USER_EMAIL ||
  testcafeCredentials.nonSubscribeUserEmail) as string;
export const nonSubUserPassword = (process.env.NON_SUB_USER_PASSWORD ||
  testcafeCredentials.nonSubUserPassword) as string;
export const noTbsSolutionsUserEmail = (process.env.NO_TBS_USER_EMAIL ||
  testcafeCredentials.noTbsSolutionsUserEmail) as string;
export const noTbsSolutionsUserPassword = (process.env.NO_TBS_USER_PASSWORD ||
  testcafeCredentials.noTbsSolutionsUserPassword) as string;
export const csUserAuth = (process.env.CS_USER_AUTH ||
  testcafeCredentials.csUserAuth) as string;
export const nonSubUserMopEmail = (process.env.NON_SUB_USER_MOP_EMAIL ||
  testcafeCredentials.nonSubUserEmail) as string;
export const nonSubUserMopPassword = (process.env.NON_SUB_USER_MOP_PASSWORD ||
  testcafeCredentials.nonSubUserPassword) as string;
export const examPrepEmail = (process.env.EXAM_PREP_EMAIL ||
  testcafeCredentials.examPrepEmail) as string;
export const examPrep2Email = (process.env.EXAM_PREP2_EMAIL ||
  testcafeCredentials.examPrep2Email) as string;
export const cheggMateUserProd = (process.env.CHEGG_MATE_USER_PROD ||
  testcafeCredentials.cheggMateUserProd) as string;
export const cheggMateUserTest = (process.env.CHEGG_MATE_USER_TEST ||
  testcafeCredentials.cheggMateUserTest) as string;
export const cheggMateUserPassword = (process.env.CHEGGMATE_USER_PASSWORD ||
  testcafeCredentials.cheggMateUserPassword) as string;
export const examPrep2Password = (process.env.EXAM_PREP2_PASSWORD ||
  testcafeCredentials.examPrep2Password) as string;
export const a11yUserEmail = (process.env.A11Y_USER_EMAIL ||
  testcafeCredentials.a11yUserEmail) as string;
export const csCanceledUserEmail = (process.env.CS_CANCELED_USER_EMAIL ||
  testcafeCredentials.csCanceledUserEmail) as string;
export const commerceWTPaidUserEmail = (process.env
  .COMMERCE_WT_PAID_USER_EMAIL ||
  testcafeCredentials.commerceWTPaidUserEmail) as string;
export const commerceCSCanceledUserEmail = (process.env
  .COMMERCE_CS_CANCELED_USER_EMAIL ||
  testcafeCredentials.commerceCSCanceledUserEmail) as string;
export const csCanceledUserPassword = (process.env.CS_CANCELED_USER_PASSWORD ||
  testcafeCredentials.csCanceledUserPassword) as string;
export const commerceCSPCanceledUserEmail = (process.env
  .COMMERCE_CSP_CANCELED_USER_EMAIL ||
  testcafeCredentials.commerceCSPCanceledUserEmail) as string;
export const cspCanceledUserEmail = (process.env.CSP_CANCELED_USER_EMAIL ||
  testcafeCredentials.cspCanceledUserEmail) as string;
export const doordashSubEmail = (process.env.SQNA_NON_SUB_EMAIL ||
  testcafeCredentials.doordashSubEmail) as string;
export const cspCanceledUserPassword = (process.env
  .CSP_CANCELED_USER_PASSWORD ||
  testcafeCredentials.cspCanceledUserPassword) as string;
export const csPausedUserEmailTest = (process.env.CS_PAUSED_USER_EMAIL_TEST ||
  testcafeCredentials.csPausedUserEmailTest) as string;
export const commerceCSPausedUserEmail = (process.env
  .COMMERCE_CS_PAUSED_USER_EMAIL ||
  testcafeCredentials.commerceCSPausedUserEmail) as string;
export const mathPaidUserEmail = (process.env.MATH_PAID_USER_EMAIL ||
  testcafeCredentials.mathPaidUserEmail) as string;
export const mathPaidUserPassword = (process.env.MATH_PAID_USER_PASSWORD ||
  testcafeCredentials.mathPaidUserPassword) as string;
export const uversityUserEmail = (process.env.UVERSITY_USER_EMAIL ||
  testcafeCredentials.uversityUserEmail) as string;
export const uversityUserPassword = (process.env.UVERSITY_USER_PASSWORD ||
  testcafeCredentials.uversityUserPassword) as string;
export const wtApplitoolsAPIKey = (process.env.WRITING_APPLITOOLS_API_KEY ||
  testcafeCredentials.wtApplitoolsAPIKey) as string;
export const wtPaidUserEmail = (process.env.WT_PAID_USER_EMAIL ||
  testcafeCredentials.wtPaidUserEmail) as string;
export const wtPaidUserPassword = (process.env.WT_PAID_USER_PASSWORD ||
  testcafeCredentials.wtPaidUserPassword) as string;
export const wtPaidUserExpertCheckFeedBackEmail = (process.env
  .WT_PAID_USER_EMAIL_EXPERT_FEEDBACK ||
  testcafeCredentials.wtPaidUserExpertCheckFeedBackEmail) as string;
export const wtPaidUserExpertCheckFeedBackPassword = (process.env
  .WT_PAID_USER_PASSWORD_EXPERT_FEEDBACK ||
  testcafeCredentials.wtPaidUserExpertCheckFeedBackPassword) as string;
export const wtFreeUserEmail = (process.env.WT_FREE_USER_EMAIL ||
  testcafeCredentials.wtFreeUserEmail) as string;
export const wtFreeUserPassword = (process.env.WT_FREE_USER_PASSWORD ||
  testcafeCredentials.wtFreeUserPassword) as string;
export const wtPaidApplitAxeUserEmail = (process.env
  .WT_PAID_AXEAPPLIT_USER_EMAIL ||
  testcafeCredentials.wtPaidApplitAxeUserEmail) as string;
export const wtPaidApplitAxePassword = (process.env
  .WT_PAID_AXEAPPLIT_USER_PASSWORD ||
  testcafeCredentials.wtPaidApplitAxePassword) as string;
export const wtFreeApplitAxeUserEmail = (process.env
  .WT_FREE_AXEAPPLIT_USER_EMAIL ||
  testcafeCredentials.wtFreeApplitAxeUserEmail) as string;
export const wtFreeApplitAxePassword = (process.env
  .WT_FREE_AXEAPPLIT_USER_PASSWORD ||
  testcafeCredentials.wtFreeApplitAxePassword) as string;
export const sqnaSubEmail = (process.env.SQNA_SUB_EMAIL ||
  testcafeCredentials.sqnaSubEmail) as string;
export const sqnaSubPassword = (process.env.SQNA_SUB_PASSWORD ||
  testcafeCredentials.sqnaSubPassword) as string;
export const sqnaNonSubEmail = (process.env.SQNA_NON_SUB_EMAIL ||
  testcafeCredentials.sqnaNonSubEmail) as string;
export const sqnaNonSubPassword = (process.env.SQNA_NON_SUB_PASSWORD ||
  testcafeCredentials.sqnaNonSubPassword) as string;
export const csSubUser = (process.env.CS_SUB_USER ||
  testcafeCredentials.csSubUser) as string;
export const csSubUserPassword = (process.env.CS_SUB_USER_PASSWORD ||
  testcafeCredentials.csSubUserPassword) as string;
export const csPendingPauseUserEmail = (process.env
  .CS_PENDING_PAUSE_USER_EMAIL ||
  testcafeCredentials.csPendingPauseUserEmail) as string;
export const commerceCSPendingPauseUserEmail = (process.env
  .COMMERCE_CS_PENDING_PAUSE_USER_EMAIL ||
  testcafeCredentials.commerceCSPendingPauseUserEmail) as string;
export const csPendingPauseUserPassword1 = (process.env
  .CS_PENDING_PAUSE_USER_PASSWORD1 ||
  testcafeCredentials.csPendingPauseUserPassword1) as string;
export const commerceCSPendingCancelUserEmail = (process.env
  .COMMERCE_CS_PENDING_CANCEL_USER_EMAIL ||
  testcafeCredentials.commerceCSPendingCancelUserEmail) as string;
export const csPendingCancelUserEmail = (process.env
  .CS_PENDING_CANCEL_USER_EMAIL ||
  testcafeCredentials.csPendingCancelUserEmail) as string;
export const csPendingCancelUserPassword = (process.env
  .CS_PENDING_CANCEL_USER_PASSWORD ||
  testcafeCredentials.csPendingCancelUserPassword) as string;
export const commerceCSPPendingCancelUserEmail = (process.env
  .COMMERCE_CSP_PENDING_CANCEL_USER_EMAIL ||
  testcafeCredentials.commerceCSPPendingCancelUserEmail) as string;
export const pricingsdkProdKey = (process.env.PRICINGSDK_PRODKEY ||
  testcafeCredentials.pricingsdkProdKey) as string;
export const cspPendingCancelUserEmail = (process.env
  .CSP_PENDING_CANCEL_USER_EMAIL ||
  testcafeCredentials.cspPendingCancelUserEmail) as string;
export const cspPendingCancelUserPassword = (process.env
  .CSP_PENDING_CANCEL_USER_PASSWORD ||
  testcafeCredentials.cspPendingCancelUserPassword) as string;
export const csPausedUserEmailProd = (process.env.CS_PAUSED_USER_EMAIL_PROD ||
  testcafeCredentials.csPausedUserEmailProd) as string;
export const csPausedUserPasswordProd = (process.env
  .CS_PAUSED_USER_PASSWORD_PROD ||
  testcafeCredentials.csPausedUserPasswordProd) as string;
export const tbsSubEmail =
  process.env.TBS_SUB_EMAIL || (testcafeCredentials.tbsSubEmail as string);
export const tbsNonSubEmail = (process.env.TBS_NONSUB_EMAIL ||
  testcafeCredentials.tbsNonSubEmail) as string;
export const tbsNonSubPassword = (process.env.TBS_NONSUB_PASSWORD ||
  testcafeCredentials.tbsNonSubPassword) as string;
export const tbsPausedEmail = (process.env.TBS_PAUSED_EMAIL ||
  testcafeCredentials.tbsPausedEmail) as string;
export const tbsCancelledCSPEmail = (process.env.TBS_CANCELED_CSPSUB_EMAIL ||
  testcafeCredentials.tbsCancelledCSPEmail) as string;
export const qnaUserEmailPaid = (process.env.QNA_PAID_USER_EMAIL ||
  testcafeCredentials.qnaUserEmailPaid) as string;
export const qnaUserPaidPassword = (process.env.QNA_PAID_USER_PASSWORD ||
  testcafeCredentials.qnaUserPaidPassword) as string;
