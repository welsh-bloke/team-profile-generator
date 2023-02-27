// Declare Engineer class which inherits from Employee
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
    }

    get getRole() {
        return "Engineer";
    }

    get getGithub() {
        return this.github;
    }

    set setGithub(acc) {
        this.github = acc;
    }
}

module.exports = Engineer;
