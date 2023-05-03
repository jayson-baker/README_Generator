// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
const questions = [
  "title:input:Enter title of project?",
  "description:input:Enter description of project?",
  "install:input:Enter install instructions?",
  "usage:input:What is the use of your project?",
  "contribution:input:Who were the contributors to your project?",
  "tests:input:Please enter any tests",
  "license:checkbox:What license did you use?:None:MIT:Mozilla Public License 2.0:IBM Public License Version 1.0",
  "username:input:Please enter GitHub Username",
  "email:input:Please enter your E-mail",
].map((element) => {
  const [name, type, message, ...choices] = element.split(":");
  return { name, type, message, choices };
});

// Function to write README file
function writeToFile(answers) {
  fs.writeFile("README.md", generateMarkdown(answers), (err) =>
    err ? console.log(err) : console.log("Successfully created README!")
  );
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then(writeToFile);
}

// Function call to initialize app
init();
