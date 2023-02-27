const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
let licences = ['MIT', 'Boost Software License 1.0', 'Apache License 2.0', 'Eclipse Public License 2.0'];
const util = require ("util");
const writeFileAsync = util.promisify(fs.writeFile);

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
            message: 'Pick the application licence from the list below',
            name: 'license',
            choices: licences,
            filter: function (val) {
                if (val == "MIT") {

                    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
                } else if (val == 'Boost Software License 1.0') {
                    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
                } else if (val == "Apache 2.0 License") {
                    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
                } else if (val == "Eclipse Public License 1.0") {
                    return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
                }
            }
        },
        {
            type: 'input',
            message: 'What are the instructions on how to test the application?',
            name: 'tests'
        },
    ]);


// function to write README file
function writeToFile(fileName, data) {
    writeFileAsync(fileName,data).then(() => console.log("written successfully... :)")).catch((error)=>console.error(error))
}

// function to initialize program
function init() {
    questions().then((answers)=> {
        if(answers.licenses== 'MIT'){
            
            answers["licenseBadge"] = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
        }
    
    writeToFile("README.md",generateMarkdown(answers))
    
})
}

// function call to initialize program
init();
