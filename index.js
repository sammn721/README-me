// DONE: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

// DONE: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Give a brief description of your project:",
        name: "description"
    },
    {
        type: "input",
        message: "Enter table of contents:",
        name: "tableOfContents"
    },
    {
        type: "input",
        message: "Provide instructions for installation:",
        name: "installation"
    },
    {
        type: "input",
        message: "Provide instructions for use:",
        name: "usage"
    },
    {
        type: "input",
        message: "What license was used for this project?",
        name: "license"
    },
    {
        type: "input",
        message: "How can others contribute?",
        name: "contributing"
    },
    {
        type: "input",
        message: "What tests are included?",
        name: "tests"
    },
    {
        type: "input",
        message: "Questions?",
        name: "questions"
    },
];

// DONE: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./output/${fileName}`, data, (err) => err ? console.log(err) : console.log('Success!'));
}

// DONE: Create a function to initialize app
function init() {
    // Use `inquirer.prompt()` to prompt the user for answers
    inquirer
        .prompt(questions)
        // THEN we'll use the user's `answers` to `generateMarkdown(answers)` and store the result in `markdownText`
        .then((answers) => {
            const markdownText = generateMarkdown(answers);
            writeToFile("README.md", markdownText);
        // Use the generated `markdownText` to `writeToFile("output.md",markdownText)
        });
}

// Function call to initialize app
init();
