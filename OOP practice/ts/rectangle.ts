
 class MyRectangle {
    length: number;
    width: number;
  
    constructor(length: number, width: number) {
      this.length = length;
      this.width = width;
    }
  
    getLength(): number {
      return this.length;
    }
  
    setLength(length: number) {
      this.length = length;
    }
  
    getWidth(): number {
      return this.width;
    }
  
    setWidth(width: number) {
      this.width = width;
    }
  
    getArea(): number {
      return this.length * this.width;
    }
  
    getPerimeter(): number {
      return 2 * (this.length + this.width);
    }
  }
  
  const rectangle = new MyRectangle(50, 100);
  const area = rectangle.getArea();
  const perimeter = rectangle.getPerimeter();
  
  console.log("Area:", area);
  console.log("Perimeter:", perimeter);