// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case "Apache-2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "GPLv3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "No license":
      return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case "Apache-2.0":
      return "[Apache-2.0](https://opensource.org/licenses/Apache-2.0)";
    case "MIT":
      return "[MIT](https://opensource.org/licenses/MIT)";
    case "GPLv3":
      return "[GPLv3](https://www.gnu.org/licenses/gpl-3.0)";
    case "No license":
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "No license") {
    "";
  } else return `## License
This project is ${renderLicenseLink} licensed.`
}

function renderTitle(title) {
  return `# ${title}`
}
function renderDescription(description) {
  return `${description}`
}
function renderTableOfContents() {
  return `## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)`
}
function renderInstallation(installation) {
  return `## Installation
${installation}`
}
function renderUsage(usage) {
  return `## Usage
${usage}`
}
function renderContributing(contributing) {
  return `## Contributing
${contributing}`
}
function renderTests(tests) {
  return `## Tests
${tests}`
}
function renderQuestions(questions) {
  return `## Questions
${questions}`
}

// DONE: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderTitle(data.title)}${renderLicenseBadge(data.license)}
${renderDescription(data.description)}\n
${renderTableOfContents(data.tableOfContents)}\n
${renderInstallation(data.installation)}\n
${renderUsage(data.usage)}\n
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}\n
${renderContributing(data.contributing)}\n
${renderTests(data.tests)}\n
${renderQuestions(data.questions)}\n`;
}

module.exports = generateMarkdown;
