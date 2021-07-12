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
function writeToFile(fileName, data) {
    fs.writeFile(`./output/${fileName}`, data, (err) => err ? console.log(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
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
