
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


let team = [];

// fs.writeFile did not work for me - threw error
// used fs.writeFileSync instead
async function startProgram() {
    team.push(new Manager('Mark Smith', 1, 'mark@test.com', '04454 123456'))
    team.push(new Engineer('Sue Jones', 2, 'sue@test.com', 'https://github.com/welsh-bloke'))
    team.push(new Intern('Paul Davies', 3, 'paul@test.com', 'Duffryn High School'))
    let htmlDoc = render(team)
    console.log(outputPath)
    await fs.writeFileSync(outputPath, htmlDoc)
}

startProgram();
