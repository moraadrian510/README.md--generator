// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');



// TODO: Create an array of questions for user input
inquirer
    .Prompt([
        {
            type: 'input',
            message: 'what is the name of your project?',
            name: 'Title',
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
            message: 'provide instructions of how to use your project',
            name: 'usage',
            validate: (value) => {if (value){return true} else {return 'list instructions to continue' }}
        },
        {
            type: 'list',
            message: 'what license will you be using?',
            name: 'license',
            choices: ['MIT license', 'GPL license', 'Apache license', 'GNU license', 'N/A']
        },
        {
            type: 'input',
            message: 'List your contributors',
            name: 'Contributing',
            validate: (value) => {if (value){return true} else {return 'list collaborators to continue' }}
        },
        {
            type: 'input',
            message: 'what tech did you use to create your project?',
            name: 'built',
            validate: (value) => {if (value){return true} else {return 'list examples - html, JavaScript ect' }}
        },
        {
            type: 'input',
            message: 'what is your E-mail address',
            name: 'questions',
            validate: (value) => {if (value){return true} else {return 'list contact email' }}
        },
        {
            type: 'input',
            message: 'what is your GitHub username',
            name: 'git',
            validate: (value) => {if (value){return true} else {return 'list GitHub  username' }}
        }
    ]).then(({
        title,
        description,
        installation,
        usage,
        license,
        credits,
        built,
        email,
        git
    })) 
    
// TODO: Create a function to write README file

function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
