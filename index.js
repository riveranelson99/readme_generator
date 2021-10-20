// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        message: "What is your Github username?",
        name: "username",
    },
    {
        message: "What is your email address?",
        name: "email",
    },
    {
        message: "What is your project's name?",
        name: "title",
    },
    {
        message: "Please write a short description of your project:",
        name: "description",
    },
    {
        type: "list",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
        message: "What kind of license should your project have?",
        name: 'license',
    },
    {
        message: "What command should be run to install dependencies?",
        name: "install",
        default: "npm i",
    },
    {
        message: "What command should be run to run tests?",
        name: "tests",
        default: "npm test",
    },
    {
        message: "What does the user need to know about using the repo?",
        name: "usage",
    },
    {
        message: "What does the user need to know about contributing to the repo?",
        name: "contributing",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => { 
        err ? console.error(err) : console.log("Generating README...")
    }
);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => { 
            writeToFile(`${response.title}README.md`, response)
        });
}

// Function call to initialize app
init();