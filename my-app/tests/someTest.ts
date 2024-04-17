import { Selector } from "testcafe";
import { TRUNK_URL } from "../helper/generic/urls";
import { createUser } from "../helper/identity/user";

import { login } from "../helper/identity/authHelper";

fixture`Auth tests`.page`http://trunk.live.test.cheggnet.com/`;

test("Login function successfully authenticates", async (t) => {
  const user = await createUser();
  await login(user.email, user.password);
  await t.navigateTo(TRUNK_URL);
  await t
    .expect(await Selector('[data-test="header-text"]').innerText)
    .eql("Home");
});
