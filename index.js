
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

let manager = new Manager();

manager.setName = 'Mark Smith';
manager.setId = 1;
manager.setEmail = 'mark@test.com';
manager.setOfficeNumber = '04454 123456';

async function startProgram() {
    team.push(manager)
    team.push(new Engineer('Sue Jones', 2, 'sue@test.com', 'https://github.com/welsh-bloke'))
    team.push(new Intern('Paul Davies', 3, 'paul@test.com', 'Duffryn High School'))
    let htmlDoc = render(team)
    console.log(outputPath)
    await fs.writeFileSync(outputPath, htmlDoc)
}

startProgram();
