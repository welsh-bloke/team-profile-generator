// Declare Engineer class which inherits from Intern
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
    }

    get getRole() {
        return "Intern";
    }

    get getSchool() {
        return "Duffryn High";
    }
}

module.exports = Intern;
