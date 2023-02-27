// Declare Manager class which inherits from Employee
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }    

    get getRole() {
        return "Manager";
    }

    get getOfficeNumber() {
        return this.officeNumber;
    }

    set setOfficeNumber(num) {
        this.officeNumber = num;
    }
}

module.exports = Manager;