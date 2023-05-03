// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  "title:input:Enter title of project?",
  "description:input:Enter description of project?",
  "install:input:Enter install instructions?",
  "usage:input:What is the use of your project?",
  "contribution:input:Who were the contributors to your project?",
  "tests:input:Please enter any tests",
  "license:checkbox:What license did you use?:None:MIT:Microsoft Public License:Open Software License 3.0",
  "username:input:Please enter GitHub Username",
  "email:input:Please enter your E-mail",
].map((element) => {
  const [name, type, message, ...choices] = element.split(":");
  return { name, type, message, choices };
});

// TODO: Create a function to write README file
function writeToFile(answers) {
  fs.writeFile("README.md", generateMarkdown(answers), (err) =>
    err ? console.log(err) : console.log("Successfully created README!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(writeToFile);
}

// Function call to initialize app
init();
