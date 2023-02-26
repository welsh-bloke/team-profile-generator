// Declare Manager class which inherits from Employee
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
    }

    get getRole() {
        return "Manager";
    }
}

module.exports = Manager;