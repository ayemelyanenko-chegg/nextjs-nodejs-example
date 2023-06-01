// @ts-ignore
// In order to use the axe library with testcafe, please pass in the below as part of your .testcaferc.json setup
// "clientScripts":[{"module":"axe-core/axe.min.js"}]

import { runAxe, createReport } from "@testcafe-community/axe";
import { axeContext, axeOptions } from "../axe.config";
import { createHtmlReport } from "axe-html-reporter";
const fs = require("fs");

const a11y = async (
  t,
  context = axeContext,
  options = axeOptions,
  reportDir = "./testcafe/reports/accessibility-audit.json",
  numberViolations = 1
) => {
  console.log("Tags Applied: ", options.runOnly.values);
  const { error, results } = await runAxe(context, options);
  //json report
  const jsonViolations = JSON.stringify(results.violations, null, 2);
  fs.writeFile(reportDir, jsonViolations, function* (err, result) {
    if (err) console.info("error", err);
  });
  //html report, more info about options https://github.com/lpelypenko/axe-html-reporter
  createHtmlReport({
    results: { violations: results.violations },
    options: {
      outputDir: "./testcafe/reports",
      reportFileName: "accessibility-audit.html",
    },
  });
  await t
    .expect(results.violations.length === numberViolations)
    .ok(createReport(results.violations));
};

module.exports = a11y;