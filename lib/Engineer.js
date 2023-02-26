// Declare Engineer class which inherits from Employee
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
    }

    get getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;
