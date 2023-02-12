// TODO: Create a function that returns a license badge based on which license is passed in
function getLicenseBadge(license) {
  switch (license) {
    case 'Mit':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'Unlicensed':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
    case 'GPL':
      return '[![License: Unlicense](https://img.shields.io/badge/License-GPL-yellow.svg)](http://unlicense.org/)'
    case 'GNU':
      return '[![License: GNU](https://img.shields.io/badge/License-GNU-red.svg)](http://unlicense.org/)'
      default:
        return 'lisence type not found err'
  }
}


// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === null) {
    return " ";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === null) {
    return " ";
  } else {
    return `https://choosealicense.com/` // can use template literal to generate license???
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseIndex = readme.indexOf('##license')//need help!!!!!!!!!!!!!!!!
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Built With](#built-with)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Built With
${data.built}

## Tests 
${data.tests}

## Questions
If you have any questions about this project, please contact me at ${data.questions}.
Im also on GitHub ${data.git}.

`;
}

module.exports = generateMarkdown;
