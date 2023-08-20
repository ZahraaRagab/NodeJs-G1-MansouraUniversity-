var InvoiceItem = /** @class */ (function () {
  function InvoiceItem(id, description, quantity, unitPrice) {
    this.id = id;
    this.description = description;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
  }
  // Getters and setters
  InvoiceItem.prototype.getId = function () {
    return this.id;
  };
  InvoiceItem.prototype.setId = function (id) {
    this.id = id;
  };
  InvoiceItem.prototype.getDescription = function () {
    return this.description;
  };
  InvoiceItem.prototype.setDescription = function (description) {
    this.description = description;
  };
  InvoiceItem.prototype.getQuantity = function () {
    return this.quantity;
  };
  InvoiceItem.prototype.setQuantity = function (quantity) {
    this.quantity = quantity;
  };
  InvoiceItem.prototype.getUnitPrice = function () {
    return this.unitPrice;
  };
  InvoiceItem.prototype.setUnitPrice = function (unitPrice) {
    this.unitPrice = unitPrice;
  };
  // Calculate total price for the item
  InvoiceItem.prototype.calculateTotal = function () {
    return this.quantity * this.unitPrice;
  };
  return InvoiceItem;
})();
var item = new InvoiceItem(123, "Sample Item", 5, 10.99);
console.log("----------------------------------");
console.log(item.getDescription()); // Output: Sample Item
console.log(item.calculateTotal()); // Output: 54.95
console.log("----------------------------------");
