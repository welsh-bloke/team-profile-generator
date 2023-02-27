
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

const managers = [
    {
        type: 'input',
        name: 'name',
        message: "What's your manager's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What's your manager's id?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What's your manager's email?",
    },
    {
        type: 'input',
        name: 'office',
        message: "What's your manager's office number?",
    },
    {
        type: 'confirm',
        name: 'addAnotherManager',
        message: "Would you like to add another manager (type 'Y' for 'yes', or just hit enter for 'no)?",
        default: false,
    },

]

const engineers = [
    {
        type: 'input',
        name: 'name',
        message: "What's your engineers's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What's your engineers's id?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What's your engineers's email?",
    },
    {
        type: 'input',
        name: 'github',
        message: "What's your engineer's Github account url?",
    },
    {
        type: 'confirm',
        name: 'addAnotherEngineer',
        message: "Would you like to add another engineer (type 'Y' for 'yes', or just hit enter for 'no)?",
        default: false,
    },

]

const interns = [
    {
        type: 'input',
        name: 'name',
        message: "What's your intern's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What's your intern's id?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What's your intern's email?",
    },
    {
        type: 'input',
        name: 'school',
        message: "What School did this intern attend?",
    },
    {
        type: 'confirm',
        name: 'addAnotherIntern',
        message: "Would you like to add another intern (type 'Y' for 'yes', or just hit enter for 'no)?",
        default: false,
    },

]

const addManagers = () => {
    inquirer.prompt(managers).then((answers) => {
        let manager = new Manager();

        manager.setName = answers.name;
        manager.setId = answers.id;
        manager.setEmail = answers.email;
        manager.setOfficeNumber = answers.office;

        team.push(manager);

      if (answers.addAnotherManager) {
        addManagers();
      } else {
        addEngineers();
      }
    });
}

const addEngineers = () => {
    inquirer.prompt(engineers).then((answers) => {
        let engineer = new Engineer();

        engineer.setName = answers.name;
        engineer.setId = answers.id;
        engineer.setEmail = answers.email;
        engineer.setGithub = answers.github;

        team.push(engineer);

      if (answers.addAnotherEngineer) {
        console.log(team);
      } else {
        addInterns();
      }
    });
}

const addInterns = () => {
    inquirer.prompt(interns).then((answers) => {
        let intern = new Intern();

        intern.setName = answers.name;
        intern.setId = answers.id;
        intern.setEmail = answers.email;
        intern.setSchool = answers.github;

        team.push(intern);

      if (answers.addAnotherEngineer) {
        addEngineers();
      } else {
        startProgram();
      }
    });
}

addManagers();

async function startProgram() {
    let htmlDoc = render(team);
    await fs.writeFileSync(outputPath, htmlDoc);
}

startProgram();
