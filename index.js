// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input', 
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input', 
        name: 'description',
        message: 'What is the description of your project?'
    },
    {
        type: 'input',
        name: 'install',
        message: "What are the installation instructions for your project?"
    },
    {
        type: 'input',
        name: 'usage',
        message: "What is the usage of this project"
    },
    {
        type: 'list', 
        name: 'license',
        message: 'What is the license of your project?',
        choices: ['MIT', "APACHE", "GPL", "BSD", "None"]
    },
    {
        type: 'input',
        name: 'contributing',
        message: "Who can we contribute for this project?"
    },
    {
        type: 'input',
        name: 'test',
        message: "How would you test your project?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // fs.writeFile(path, Datacontent)
    fs.writeFile(path.join(__dirname, fileName), data, function(err) {
        if(err) {
            console.log("Err: ", err);
        }
        console.log("Readme file Created!")
    });
}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)  // async method RETURNS a PROMISE (success | failure)
        .then(answers => {
            console.log("Data: ", answers);

            let result = generateMarkdown(answers);
            console.log("Result: ", result);
            // console.log("Type: ", typeof result);
            writeToFile("README.md", result);
        })
        .catch(err => {
            console.log("Err: ", err);
            return;
        });
}

// Function call to initialize app
init();
