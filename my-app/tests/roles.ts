/* eslint-disable new-cap */
import { Role } from "testcafe";
import config from "./config";

const locators = require("./locators");
const loginUrl = `${config.cheggUrl}auth?action=login`;

// generic role function, plug in your user credentials from constants.ts into roles in your own test files
// e.g. import { examPrepEmail, userPassword} from '../helpers/constants';
// await t.useRole(roles.userRole(examPrepEmail, userPassword));
export const userRole = (email: string, password: string): Role => {
  return Role(loginUrl, async (t) => {
    await t
      .typeText(locators.emailForSignIn, email, { paste: true })
      .typeText(locators.passForSignin, password, { paste: true })
      .click(locators.signInButton);
    console.log("Logging in with " + email);
  });
};
