// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information:',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidelines:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Which license does your application use?',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
    ]; 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data); 
    // process.cwd() is the current working directory
}

// TODO: Create a function to initialize app
function init() { // inquirer.prompt() returns a promise
    inquirer.prompt(questions) //
    .then((inquirerResponses) => { // inquirerResponses is an object
        console.log("Generating README..."); 
        writeToFile("README.md", generateMarkdown({...inquirerResponses})); // spread operator
    })
}

// Function call to initialize app
init();
