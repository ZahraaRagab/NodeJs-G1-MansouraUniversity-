class Product {
    id: number;
    name: string;
    price: number;
  
    constructor(id: number, name: string, price: number) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
}
  
  const products: Product[] = [
    new Product(1, 'Product 1', 10),
    new Product(2, 'Product 2', 20),
    new Product(3, 'Product 3', 30),
  ];
  

  const numObjects = products.length;
  
  const totalPrice = products.reduce((total, product) => total + product.price, 0);
  
  // Generate the HTML table dynamically
  let html = '<table>';
  html += '<tr><th>ID</th><th>Name</th><th>Price</th></tr>';
  
  for (const product of products) {
    html += `<tr><td>${product.id}</td><td>${product.name}</td><td>${product.price}</td></tr>`;
  }
  
  html += '</table>';
  
 
  const tableContainer = document.getElementById('table-container');
if (tableContainer !== null) {
  tableContainer.innerHTML = html;
}
  // Display the number of objects and total price
  const objectCountElement = document.getElementById('object-count');
  if (objectCountElement !== null) {
    objectCountElement.textContent = `Number of objects: ${numObjects}`;
  }
  
  const totalPriceElement = document.getElementById('total-price');
  if (totalPriceElement !== null) {
    totalPriceElement.textContent = `Total price: ${totalPrice}`;
  }