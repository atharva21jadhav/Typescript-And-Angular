class Arthmetic {

    Number1:number;
    Number2:number;

    constructor(num1:number, num2:number) 
    {
        this.Number1 = num1;
        this.Number2 = num2;
    }

    Addition():number
    {
        var result:number = 0;
        result = this.Number1 + this.Number2;
        return result;
    }

    Subtraction():number
    {
        var result:number = 0;
        result = this.Number1 - this.Number2;
        return result;
    }

    Multiplication():number
    {
        var result:number = 0;
        result = this.Number1 * this.Number2;
        return result;
    }

    Divison():number
    {
        var result:number = 0;
        result = this.Number1 / this.Number2;
        return result;
    }
}

var obj1 = new Arthmetic(5,10);

console.log('Addition of 5&10 = ' + obj1.Addition());
console.log('Subtraction of 5&10 = ' + obj1.Subtraction());
console.log('Multiplication of 5&10 = ' + obj1.Multiplication());
console.log('Division of 5&10 = ' + obj1.Divison());

console.log('========================================');

var obj2 = new Arthmetic(1055,10.55);

console.log('Addition of 1055 & 10.55 = ' + obj2.Addition());
console.log('Subtraction of 1055 & 10.55 = ' +obj2.Subtraction());
console.log('Multiplication of 1055 & 10.55 = ' +obj2.Multiplication());
console.log('Division of 1055 & 10.55 = ' + obj2.Divison());

