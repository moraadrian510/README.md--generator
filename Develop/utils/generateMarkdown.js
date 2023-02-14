// TODO: Create a function that returns a license badge based on which license is passed in
function getLicenseBadge(license) {

  const licenseTypes = {
    mit: 'MIT',
    apache: 'Apache',
    unlicensed: 'Unlicensed',
    gpl:'GPL',
    gnu: 'GNU',
  }
   
  const type = licenseTypes[license.toLowerCase()];
  if (!type) {
    return `Error: License type "${license}" not found`
  }
  return `![License: ${type}](https://img.shields.io/badge/License-${type}-red.svg)`;
}


// If there is no license, return an empty string
function renderLicenseBadge() {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink() {
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection() {
  const licenseIndex = readme.indexOf('##license')//need help!!!!!!!!!!!!!!!!
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = getLicenseBadge(data.license); //
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
${licenseBadge}
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing} //might not need this

## Built With
${data.built}

## Tests 
${data.tests}

## Questions
If you have any questions about this project, please contact me through my links.

[E-mail](${data.questions})

[GitHub](${data.git})

`;
}

module.exports = generateMarkdown;
