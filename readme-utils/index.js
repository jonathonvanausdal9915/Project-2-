// TODO: Include packages needed for this application
const inquirer = require("inquirer");
let fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the usage information?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license do you want?',
        choices: ["MIT", "ISC", "Apache_2.0"]
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is the github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);

    // (`/Users/sejinki/Desktop/Homework/-read-me-/${fileName}
    console.log("test");
}

function promptUser() {
    inquirer
        .prompt(
            questions
        )
        .then((answers) => {
            let markdown = generateMarkdown(answers);
            writeToFile("readme.md", markdown)
            console.log(answers);
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}
// TODO: Create a function to initialize app
function init() {
    promptUser()
}

// Function call to initialize app
init();