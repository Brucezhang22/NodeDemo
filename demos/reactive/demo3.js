/** 
 * functional paradigm demo 
 */
class Calculator {
    getTotal = (items) => {
        const total = items.map(this.addVAT).reduce(this.sumElements);
    }

    addVAT = (itemValue) => {
        return itemValue + this.calculateVAT(itemValue);
    }

    calculateVAT = (value) => {
        const VAT = 22;
        return value * VAT / 100;
    }

    sumElements = (accumulator, value) => {
        return accumulator + value;
    }
}

class Receipt {
    print(total) {
        console.log(`total receipt $${total.toFixed(2)}`);
    }
}

const Jeans = 80.00;
const Shirt = 35.00;
const Shoes = 90.00;
const Coat = 140.00;
const Hat = 29.00;

const calc = new Calculator();
const receipt = new Receipt();

receipt.print(calc.getTotal([Jeans, Shirt, Shoes, Coat, Hat]));