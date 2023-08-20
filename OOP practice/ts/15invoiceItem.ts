class InvoiceItem {
    private id: number;
    private description: string;
    private quantity: number;
    private unitPrice: number;
  
    constructor(id: number, description: string, quantity: number, unitPrice: number) {
      this.id = id;
      this.description = description;
      this.quantity = quantity;
      this.unitPrice = unitPrice;
    }
  
    // Getters and setters
    public getId(): number {
      return this.id;
    }
  
    public setId(id: number): void {
      this.id = id;
    }
  
    public getDescription(): string {
      return this.description;
    }
  
    public setDescription(description: string): void {
      this.description = description;
    }
  
    public getQuantity(): number {
      return this.quantity;
    }
  
    public setQuantity(quantity: number): void {
      this.quantity = quantity;
    }
  
    public getUnitPrice(): number {
      return this.unitPrice;
    }
  
    public setUnitPrice(unitPrice: number): void {
      this.unitPrice = unitPrice;
    }
  
    // Calculate total price for the item
    public calculateTotal(): number {
      return this.quantity * this.unitPrice;
    }
  }
  const item = new InvoiceItem(123, "Sample Item", 5, 10.99);
  console.log("----------------------------------")
console.log(item.getDescription()); // Output: Sample Item
console.log(item.calculateTotal()); // Output: 54.95
console.log("----------------------------------")