// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == "None") {
    return '';
  }
  return `![License Badge](https://img.shields.io/badge/License-${license}-yellow)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license == 'None') {
    return '';
  }
  return `[${license}](http://www.cnn.com)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license == 'None') {
    return '';
  }
  return `## License`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents
 1. [Installation](#installation)
 2. [Usage](#usage)
 3. [License](#license)
 4. [Contributing](#contributing)
 5. [Tests](#tests)


## Installation
${data.install}

## Usage
${data.usage}

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
${renderLicenseBadge(data.license)}

## Contributing
${data.contributing}

## Tests
${data.test}

`;
}

module.exports = generateMarkdown;
