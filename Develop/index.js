// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'what is the name of your project?',
            name: 'title',
            // validation prperty for user title input.
            validate: (value) => {
                if (value) { return true }
                else { return 'write project title to continue' }
            }
        },
        {
            type: 'input',
            message: 'write a short description about your project',
            name: 'description',
            validate: (value) => { if (value) { return true } else { return 'write description to continue' } }
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: 'installation',
            validate: (value) => { if (value) { return true } else { return 'list steps to continue' } }
        },
        {
            type: 'input',
            message: 'provide instructions of how to use your project',
            name: 'usage',
            validate: (value) => { if (value) { return true } else { return 'list instructions to continue' } }
        },
        {
            type: 'list',
            message: 'what license will you be using?',
            name: 'license',
            choices: ['MIT', 'GPL', 'Apache', 'GNU', 'unlicensed']
        },
        {
            type: 'input',
            message: 'List your contributors',
            name: 'contributing',
            validate: (value) => { if (value) { return true } else { return 'list collaborators to continue' } }
        },
        {
            type: 'input',
            message: 'what tech did you use to create your project?',
            name: 'built',
            validate: (value) => { if (value) { return true } else { return 'list examples - html, JavaScript ect' } }
        },
        {
            type: 'input',
            message: 'what is your E-mail address',
            name: 'questions',
            validate: (value) => { if (value) { return true } else { return 'list contact email' } }
        },
        {
            type: 'input',
            message: 'what is your GitHub username',
            name: 'git',
            validate: (value) => { if (value) { return true } else { return 'list GitHub  username' } }
        }
    ]).then((data) => {
        const markDownData = generateMarkdown(data)
       writeToFile('README.md',markDownData);
       console.log(markDownData);
      
    })



// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('Your README.md file has been created')
        }
    })
}

// TODO: Create a function to initialize app
function init() { 
    
}

// Function call to initialize app
init();
