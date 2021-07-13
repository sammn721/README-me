// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![${license} license](https://img.shields.io/badge/License-${license}-informational)`;
  } else if (license === "none") {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

function renderTitle(title) {
  return `# ${title}`
}
function renderDescription(description) {
  return `# ${description}`
}
function renderTableOfContents(tableOfContents) {
  return `# ${tableOfContents}`
}
function renderInstallation(installation) {
  return `# ${installation}`
}
function renderUsage(usage) {
  return `# ${usage}`
}
function renderLicense(license) {
  return `# ${license}`
}
function renderContributing(contributing) {
  return `# ${contributing}`
}
function renderTests(tests) {
  return `# ${tests}`
}
function renderQuestions(questions) {
  return `# ${questions}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderTitle(data.title)}\n
  ${renderDescription(data.description)}\n
  ${renderTableOfContents(data.tableOfContents)}\n
  ${renderInstallation(data.installation)}\n
  ${renderUsage(data.usage)}\n
  ${renderLicense(data.license)}\n
  ${renderContributing(data.contributing)}\n
  ${renderTests(data.tests)}\n
  ${renderQuestions(data.questions)}\n
  ${renderLicenseBadge(data.license)}\n
  ${renderLicenseLink(data.license)}\n
  ${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
