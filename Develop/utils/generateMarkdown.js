// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
    if (license !== 'None') { 
        return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`; // if license is not 'None'
    }
    return ''; // if license is 'None'
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
    if (license !== 'None') { //
        return `\n* [License](#license)`; // if license is not 'None'
    }
    return ''; // if license is 'None'
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'None') { 
        return `## License

This project is licensed under the ${license} license.`; // if license is not 'None'
    }
    return ''; // if license is 'None'
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)} 

## Description

${data.description} 
## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Tests](#tests)

${renderLicenseLink(data.license)}

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation} 
\`\`\`

## Usage

${data.usage}

## Contributing

${data.contribution}

## Tests

To run tests, run the following command:

\`\`\`
${data.tests}
\`\`\`

${renderLicenseSection(data.license)}

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.github}](

`;
}

module.exports = generateMarkdown;
