var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    Circle.prototype.getarea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    Circle.prototype.getperimeter = function () {
        return Math.PI * this.radius * 2;
    };
    return Circle;
}());
console.log("------------------------------------------------------");
var c = new Circle(10);
console.log(c.getarea(), c.getperimeter());
