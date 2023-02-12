// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
inquirer
    .Prompt([
        {
            type: 'input',
            message: 'what is the name of your project?',
            name: 'project title',
            // validation prperty for user title input.
            validate: (value) => {if (value){return true} else {return 'write project title to continue' }}
        },
        {
            type: 'input',
            message: 'write a short description about your project',
            name: 'description',
            validate: (value) => {if (value){return true} else {return 'write description to continue' }}
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: 'installation',
            validate: (value) => {if (value){return true} else {return 'list steps to continue' }}
        },
        {
            type: 'input',
            message: 'provide instructions and examples for use',
            name: 'usage',
            validate: (value) => {if (value){return true} else {return 'list instructions to continue' }}
        },
        {
            type: 'list',
            message: 'List your collaborators, if any',
            name: 'credits',
            
        }
    ]);
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
