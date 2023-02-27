
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
        validate: val => val === "" ? (
            emptyString()
        ) : true
    },
    {
        type: 'input',
        name: 'id',
        message: "What's your manager's id?",
        validate: val => val === "" ? (
            emptyString()
        ) : true
    },
    {
        type: 'input',
        name: 'email',
        message: "What's your manager's email?",
        validate: val => val === "" ? (
            emptyString()
        ) : true
    },
    {
        type: 'input',
        name: 'office',
        message: "What's your manager's office number?",
        validate: val => val === "" ? (
            emptyString()
        ) : true
    },
    menu(),
]


const engineers = [
    {
        type: 'input',
        name: 'name',
        message: "What's your engineers's name?",
        validate: val => val === "" ? (
            emptyString()
        ) : true
    },
    {
        type: 'input',
        name: 'id',
        message: "What's your engineers's id?",
        validate: val => val === "" ? (
            emptyString()
        ) : true
    },
    {
        type: 'input',
        name: 'email',
        message: "What's your engineers's email?",
        validate: val => val === "" ? (
            emptyString()
        ) : true
    },
    {
        type: 'input',
        name: 'github',
        message: "What's your engineer's Github account url?",
        validate: val => val === "" ? (
            emptyString()
        ) : true
    },
    menu(),
]

const interns = [
    {
        type: 'input',
        name: 'name',
        message: "What's your intern's name?",
        validate: val => val === "" ? (
            emptyString()
        ) : true
    },
    {
        type: 'input',
        name: 'id',
        message: "What's your intern's id?",
        validate: val => val === "" ? (
            emptyString()
        ) : true
    },
    {
        type: 'input',
        name: 'email',
        message: "What's your intern's email?",
        validate: val => val === "" ? (
            emptyString()
        ) : true
    },
    {
        type: 'input',
        name: 'school',
        message: "What School did this intern attend?",
        validate: val => val === "" ? (
            emptyString()
        ) : true
    },
    menu(),
]

const addManagers = () => {
    inquirer.prompt(managers).then((answers) => {
        let manager = new Manager(answers.name, answers.id, answers.email, answers.office);

        team.push(manager);

        menuChoices(answers.menu)
    });
}

const addEngineers = () => {
    inquirer.prompt(engineers).then((answers) => {
        let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);

        team.push(engineer);

        menuChoices(answers.menu)
    });
}

const addInterns = () => {
    inquirer.prompt(interns).then((answers) => {
        let intern = new Intern(answers.name, answers.id, answers.email, answers.school);

        team.push(intern);

        menuChoices(answers.menu)
    });
}

function menuChoices(choice) {
    const expr = choice
    switch(choice) {
        case 'Add a manager':
            return addManagers();
            break;
        case 'Add an engineer':
            return addEngineers();
            break;
        case 'Add an intern':
            return addInterns();
            break;
        case 'Finish building the team':
            return startProgram();
            break;
    }
}

function menu() {
    let obj = 
    {
        type: 'list',
        name: 'menu',
        message: "What would you like to do next?",
        choices: [
            'Add a manager',
            'Add an engineer',
            'Add an intern',
            'Finish building the team',
        ]
    }

    return obj;
}

function emptyString() {
    console.log('You must enter a value for this option.')
}

addManagers();

async function startProgram() {
    let htmlDoc = render(team);
    await fs.writeFileSync(outputPath, htmlDoc);
}

startProgram();
