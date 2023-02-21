const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = () => inquirer
    .prompt([

        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',
        },
        {
            type: 'password',
            message: 'What is your GitHub password?',
            name: 'password',
        },
        {
            type: 'password',
            message: 'Re-enter GitHub password to confirm:',
            name: 'confirm',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'What is the description of your project?',
            name: 'description'
        },
        {
            type: 'input',
            message: 'What is the usage of your project?',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'How can your project be installed?',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'What can a user contribute to your project?',
            name: 'contribution'
        },
        {
            type: 'list',
            message: 'Which licence is your project licenced by?',
            name: 'license'
        },
        {
            type: 'input',
            message: 'What are the instructions on how to test the application?',
            name: 'tests'
        },
    ]);


// function to write README file
function writeToFile(fileName, data) {
  
}

// function to initialize program
function init() {
questions()
}

// function call to initialize program
init();
