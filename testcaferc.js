require('dotenv').config();
const fs = require('fs');
const path = require('path');
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
const environment = process.env.CHEGG_ENV ?? 'test';
const tagString = process.env.TAGS ?? '';
const availableLanguages = getFolderNames(
'chegg-web-app/libs/common/cms/__generated__/layouts'
);

const tags = tagString.split(',').reduce((currentTags, tag) => {
if (tag === '') return currentTags;
const keyValue = tag.split('=');
currentTags[keyValue[0]] = keyValue[1].toLowerCase();
return currentTags;
}, {});
console.table({
environment,

...tags,
});

console.log('Available languages:', availableLanguages);

module.exports = {
screenshots: {
takeOnFails: true,
fullpage: true,
pathPattern:
'${FIXTURE}_${USERAGENT}/${TEST}/${DATE}_${TIME}__${QUARANTINE_ATTEMPT}/${FILE_INDEX}.png',
path: './testcafe/screenshots',
},
clientScripts: [{ module: 'axe-core/axe.min.js' }],
reporter: [
{
name: 'spec-time',
},
{
name: 'slack-errors-only',
},
{
name: 'list',
output: 'testcafe/reports/report.txt',
},
{
name: 'xunit',
output: 'testcafe/reports/xunit.xml',
},
{
name: 'html',
output: 'testcafe/reports/report.html',
},
{
name: 'allure-expanded',
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
userVariables: {
availableLanguages,
},
// eslint-disable-next-line max-params
filter: function (_, _, _, testMeta, fixtureMeta) {
let hasEnvironment = true;
for (const [key, value] of Object.entries(tags)) {
const isMetaEqual = testMeta[key]
? testMeta[key].toLowerCase() === value
: true;

if (!isMetaEqual) return false;
}
if (fixtureMeta.env) {
hasEnvironment = Array.isArray(fixtureMeta.env)
? fixtureMeta.env.includes(environment)
: fixtureMeta.env === environment;
} else if (testMeta.env) {
hasEnvironment = Array.isArray(testMeta.env)
? testMeta.env.includes(environment)
: testMeta.env === environment;
}

return hasEnvironment;
},
};
