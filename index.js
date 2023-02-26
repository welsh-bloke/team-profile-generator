
const Employee = require("./lib/Employee");const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

let Mike = new Employee
let Steve = new Engineer
let Jo = new Intern
let Mark = new Manager

console.log(Mike.getRole)
console.log(Steve.getRole)
console.log(Jo.getRole)
console.log(Mark.getRole)


// TODO: Write Code to gather information about the development team members, and render the HTML file.
// Use inquirer to ask questions

