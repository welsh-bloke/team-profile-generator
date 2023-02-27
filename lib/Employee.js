// Declare Employee class

class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }

    // Getters
    get getName() {
        return this.name;
    }

    get getId() {
        return this.id;
    }

    get getEmail() {
        return this.email;
    }

    get getRole() {
        return "Employee";
    }

    set setName(name) {
        this.name = name;
    }

    set setId(id) {
        this.id = id;
    }

    set setEmail(email) {
        this.email = email;
    }
  }  

  module.exports = Employee;
