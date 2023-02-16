// function that returns a license badge based on which license is passed in
function getLicenseBadge(license) {

  const licenseTypes = {
    mit: 'MIT',
    apache: 'Apache',
    unlicensed: 'Unlicensed',
    gpl:'GPL',
    gnu: 'GNU',
  }
   
  const type = licenseTypes[license.toLowerCase()];
  console.log(license, type);
  if (!type) {
    return `Error: License type "${license}" not found`
  }
  return `![License: ${type}](https://img.shields.io/badge/License-${type}-red.svg)`;
}





// function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = getLicenseBadge(data.license); //
  console.log(licenseBadge);
  return `# ${data.title}
  ${licenseBadge}
  
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
If you have any questions about this project, please contact me through my links.

[E-mail](${data.questions})

[GitHub](${data.git})

`;
}
//exports data from the markdown 
module.exports = generateMarkdown;
