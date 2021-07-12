// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Give a brief description of your project (< 30 characters):",
        name: "brief"
    },
    {
        type: "input",
        message: "Provide instructions for use:",
        name: "instructions"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    // Use `inquirer.prompt()` to prompt the user for answers
    inquirer
        .prompt(questions)
        // THEN we'll use the user's `answers` to `generateMarkdown(answers)` and store the result in `markdownText`
        .then((answers) => {
            generateMarkdown(answers)
        // Use the generated `markdownText` to `writeToFile("output.md",markdownText)
        })

}

// Function call to initialize app
init();
