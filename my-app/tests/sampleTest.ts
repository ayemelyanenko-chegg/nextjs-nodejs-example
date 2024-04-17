import axios from "axios";

fixture`Sample test`
  .meta({
    fixtureID: "f-0001",
    author: "GDG",
    app: "",
  })
  .beforeEach(async (t) => {
    await t.navigateTo("https://react-dropzone.js.org/#section-basic-example");
  });

test.meta({
  testID: "t-0001",
  testType: "Smoke",
  testRailCaseId: "277066",
  priority: "p1",
})("Sample test", async (t) => {
  console.log("Just logging text");
});
