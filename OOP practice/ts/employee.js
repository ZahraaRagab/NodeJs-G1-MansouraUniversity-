var Employee = /** @class */ (function () {
    function Employee(id, firstname, lastname, salary) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.salary = salary;
    }
    Employee.prototype.getId = function () {
        return this.id;
    };
    Employee.prototype.getFirstname = function () {
        return this.firstname;
    };
    Employee.prototype.getLastname = function () {
        return this.lastname;
    };
    Employee.prototype.getName = function () {
        return "".concat(this.firstname, " ").concat(this.lastname);
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    Employee.prototype.getAnnualSalary = function () {
        return this.salary * 12;
    };
    Employee.prototype.raiseSalary = function (percent) {
        if (percent > 0) {
            var increase = this.salary * (percent / 100);
            this.salary += increase;
        }
    };
    Employee.prototype.toString = function () {
        return "Employee ID: ".concat(this.id, "\n Name: ").concat(this.firstname, " ").concat(this.lastname, " \n Salary: ").concat(this.salary);
    };
    return Employee;
}());
var emp1 = new Employee(1, "zahraa", "ragab", 5000);
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
