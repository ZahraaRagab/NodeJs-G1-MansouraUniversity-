interface geometric{
    getarea(): number;
    getperimeter(): number;
}

class Circle implements geometric{
    constructor(private radius: number){
        this.radius=radius;

    }

    getarea(): number{
        return Math.PI * this.radius ** 2;
    }

    getperimeter(): number {
        return Math.PI * this.radius *2
    }
}
console.log("------------------------------------------------------")
const c = new Circle(10);
console.log(c.getarea() , c.getperimeter())

