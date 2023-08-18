class Employee {
    id: number;
    firstname: string;
    lastname: string;
    salary: number;
  
    constructor(id: number, firstname: string,lastname: string, salary: number) {
      this.id = id;
      this.firstname = firstname;
      this.lastname = lastname;
      this.salary = salary;
    }

    getId(): number {
      return this.id;
    }
    getFirstname(): string {
        return this.firstname;
        }
    getLastname(): string {
        return this.lastname;
        }
    getName(): string {
        return `${this.firstname} ${this.lastname}`;
        }
    getSalary(): number {
        return this.salary;
        }
    setSalary(salary: number) {
        this.salary = salary;
        }
    getAnnualSalary(): number {
        return this.salary * 12;
        }
    
    raiseSalary(percent: number) {
      if (percent > 0) {
        const increase = this.salary * (percent / 100);
        this.salary += increase;
      }
    }
  
    toString(): string {
      return `Employee ID: ${this.id}\n Name: ${this.firstname} ${this.lastname} \n Salary: ${this.salary}`;
    }
  }
const emp1 = new Employee(1, "zahraa", "ragab", 5000);
emp1.setSalary(10000);
console.log(emp1);
console.log(emp1.getId());
console.log(emp1.getFirstname());
console.log(emp1.getLastname());
console.log(emp1.getName());
console.log(emp1.getSalary());
console.log(emp1.getAnnualSalary());
emp1.raiseSalary(10);
console.log(emp1.toString());

console.log("--------------------------------------------------");
