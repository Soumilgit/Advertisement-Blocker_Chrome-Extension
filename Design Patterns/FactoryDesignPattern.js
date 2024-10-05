
class Developer {
  constructor(name) {
    this.name = name;
    this.type = "Developer";
  }

  say() {
    console.log(`Hi, I am ${this.name} and I am a ${this.type}`);
  }
}

class Tester {
  constructor(name) {
    this.name = name;
    this.type = "Tester";
  }

  say() {
    console.log(`Hi, I am ${this.name} and I am a ${this.type}`);
  }
}


class EmployeeFactory {
  static create(name, type) {
    switch (type) {
      case 1:
        return new Developer(name);
      case 2:
        return new Tester(name);
    }
  }
}

const employeeFactory = new EmployeeFactory();
const employees = [
  EmployeeFactory.create("Soham", 1),
  EmployeeFactory.create("Sam", 2),
  EmployeeFactory.create("James", 1),
  EmployeeFactory.create("Hugh", 1),
  EmployeeFactory.create("Tim", 2)
];

// Iterate and invoke method
employees.forEach(emp => {
  emp.say();
});
