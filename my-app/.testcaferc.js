require("dotenv").config();
const fs = require("fs");
const path = require("path");
function getFolderNames(directoryPath) {
  const folderNames = [];

  const files = fs.readdirSync(directoryPath);

  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      folderNames.push(file);
    }
  }

  return folderNames;
}
const environment = process.env.CHEGG_ENV ?? "test";
const tagString = process.env.TAGS ?? "";

const tags = tagString.split(",").reduce((currentTags, tag) => {
  if (tag === "") return currentTags;
  const keyValue = tag.split("=");
  currentTags[keyValue[0]] = keyValue[1].toLowerCase();
  return currentTags;
}, {});
console.table({
  environment,

  ...tags,
});

const failedTests = [];

function onBeforeWriteHook(writeInfo) {
  if (writeInfo.initiator === "reportTestDone") {
    const { name, testRunInfo, meta } = writeInfo.data || {};
    if (testRunInfo.errs.length !== 0) {
      if (failedTests.indexOf(name) === -1) {
        const fileName = path.basename(testRunInfo.fixture.path);
        failedTests.push(meta.testRailCaseId ?? name);

        writeInfo.formattedText = `\nmetadata_failure_description: "testcafe_failure"
          \nmetadata_failure_data: ${meta.testID ?? name}_${fileName}\n
          ${writeInfo.formattedText}`;
      }
    }
  }
}

module.exports = {
  screenshots: {
    takeOnFails: true,
    fullpage: true,
    pathPattern:
      "${FIXTURE}_${USERAGENT}/${TEST}/${DATE}_${TIME}__${QUARANTINE_ATTEMPT}/${FILE_INDEX}.png",
    path: "./testcafe/screenshots",
  },
  clientScripts: [{ module: "axe-core/axe.min.js" }],
  reporter: [
    {
      name: "spec",
    },
    {
      name: "slack-errors-only",
    },
    {
      name: "xunit",
      output: "testcafe/reports/xunit.xml",
    },
    {
      name: "html",
      output: "testcafe/reports/report.html",
    },
    {
      name: "json",
      output: "testcafe/reports/report.json",
    },
  ],
  quarantineMode: {
    attemptLimit: 2,
    successThreshold: 1,
  },
  skipJsErrors: true,
  skipUncaughtErrors: true,
  selectorTimeout: 15000,
  assertionTimeout: 15000,
  pageLoadTimeout: 20000,
  speed: 1,
  qrCode: true,
  color: true,
  cache: true,
  stopOnFirstFail: false,
  hooks: {
    reporter: {
      onBeforeWrite: {
        spec: onBeforeWriteHook, // This hook will fire when you use the default "spec" reporter.
      },
    },
  },
  // eslint-disable-next-line max-params
};
