var MyRectangle = /** @class */ (function () {
    function MyRectangle(length, width) {
        this.length = length;
        this.width = width;
    }
    MyRectangle.prototype.getLength = function () {
        return this.length;
    };
    MyRectangle.prototype.setLength = function (length) {
        this.length = length;
    };
    MyRectangle.prototype.getWidth = function () {
        return this.width;
    };
    MyRectangle.prototype.setWidth = function (width) {
        this.width = width;
    };
    MyRectangle.prototype.getArea = function () {
        return this.length * this.width;
    };
    MyRectangle.prototype.getPerimeter = function () {
        return 2 * (this.length + this.width);
    };
    return MyRectangle;
}());
var rectangle = new MyRectangle(50, 100);
var area = rectangle.getArea();
var perimeter = rectangle.getPerimeter();
console.log("Area:", area);
console.log("Perimeter:", perimeter);
