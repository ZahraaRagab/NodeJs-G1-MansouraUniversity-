var Product = /** @class */ (function () {
    function Product(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    return Product;
}());
var products = [
    new Product(1, 'Product 1', 10),
    new Product(2, 'Product 2', 20),
    new Product(3, 'Product 3', 30),
];
var numObjects = products.length;
var totalPrice = products.reduce(function (total, product) { return total + product.price; }, 0);
// Generate the HTML table dynamically
var html = '<table>';
html += '<tr><th>ID</th><th>Name</th><th>Price</th></tr>';
for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
    var product = products_1[_i];
    html += "<tr><td>".concat(product.id, "</td><td>").concat(product.name, "</td><td>").concat(product.price, "</td></tr>");
}
html += '</table>';
var tableContainer = document.getElementById('table-container');
if (tableContainer !== null) {
    tableContainer.innerHTML = html;
}
// Display the number of objects and total price
var objectCountElement = document.getElementById('object-count');
if (objectCountElement !== null) {
    objectCountElement.textContent = "Number of objects: ".concat(numObjects);
}
var totalPriceElement = document.getElementById('total-price');
if (totalPriceElement !== null) {
    totalPriceElement.textContent = "Total price: ".concat(totalPrice);
}
