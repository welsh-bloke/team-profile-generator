// Declare Engineer class which inherits from Intern
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
    }

    get getRole() {
        return "Intern";
    }

    get getSchool() {
        return this.school;
    }

    set setSchool(school) {
        this.github = school;
    }
}

module.exports = Intern;
