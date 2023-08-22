var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(fname, address) {
        this.fname = fname;
        this.address = address;
        this.fname = fname;
        this.address = address;
    }
    Person.prototype.getFname = function () {
        return this.fname;
    };
    Person.prototype.setAddress = function (address) {
        this.address = address;
    };
    Person.prototype.getAddress = function () {
        return this.address;
    };
    Person.prototype.toString = function () {
        return "Person(".concat(this.fname, ",").concat(this.address, ")");
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(fname, address, program, year, fees) {
        var _this = _super.call(this, fname, address) || this;
        _this.program = program;
        _this.year = year;
        _this.fees = fees;
        _this.program = program;
        _this.year = year;
        _this.fees = fees;
        return _this;
    }
    Student.prototype.setProgram = function (program) {
        this.program = program;
    };
    Student.prototype.getProgram = function () {
        return this.program;
    };
    Student.prototype.setYear = function (year) {
        this.year = year;
    };
    Student.prototype.getYear = function () {
        return this.year;
    };
    Student.prototype.setFees = function (fees) {
        this.fees = fees;
    };
    Student.prototype.getFees = function () {
        return this.fees;
    };
    Student.prototype.toString = function () {
        return "Student(".concat(this.fname, ",").concat(this.address, ",").concat(this.program, ",").concat(this.year, ",").concat(this.fees, ")");
    };
    return Student;
}(Person));
var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff(fname, address, school, pay) {
        var _this = _super.call(this, fname, address) || this;
        _this.school = school;
        _this.pay = pay;
        _this.school = school;
        _this.pay = pay;
        return _this;
    }
    Staff.prototype.setSchool = function (school) {
        this.school = school;
    };
    Staff.prototype.getSchool = function () {
        return this.school;
    };
    Staff.prototype.setPay = function (pay) {
        this.pay = pay;
    };
    Staff.prototype.getPay = function () {
        return this.pay;
    };
    return Staff;
}(Person));
var p = new Person("John", "123 Main St.");
var s = new Student("Mary", "456 Main St.", "CS", 2019, 12345);
console.log(s.getAddress);
console.log(p);
