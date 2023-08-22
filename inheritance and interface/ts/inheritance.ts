class Person {

    constructor(protected fname: string,protected address : string) {
        this.fname = fname;
        this.address = address;
    }
    public getFname():string {
        return this.fname;
    }

    setAddress(address: string):void {
        this.address = address;
    }

    getAddress():string {
        return this.address;
    }
    toString():string {
        return `Person(${this.fname},${this.address})`;
    }

  }
  
  class Student extends Person {
    constructor(  fname:string , address:string , private program: string, private year : number, private fees: number) {
      super(fname, address);
      this.program = program;
      this.year = year;
      this.fees = fees;

    }
    setProgram(program: string):void {
        this.program = program;
    }
    getProgram():string {
        return this.program;
    }
    setYear(year: number):void {
        this.year = year;
    }
    getYear():number {
        return this.year;
    } 
    setFees(fees: number):void {
        this.fees = fees;
    } 
    getFees():number {    
        return this.fees;
    }
    toString():string {
        return `Student(${this.fname},${this.address},${this.program},${this.year},${this.fees})`;
    }
  
  }

  class Staff extends Person {
    constructor(  fname:string , address:string , private school: string, private pay: number) {
      super(fname, address);
      this.school = school;
      this.pay = pay;

    }
    setSchool(school: string):void {
        this.school = school;
    }
    getSchool():string {
        return this.school;
    } 
    setPay(pay: number):void {
        this.pay = pay;
    }
    getPay():number {
        return this.pay;
    }
  
  }
  
  const p = new Person("John", "123 Main St.");
  const s = new Student("Mary", "456 Main St.", "CS", 2019, 12345);
  console.log(s.getAddress);
  console.log(p);


