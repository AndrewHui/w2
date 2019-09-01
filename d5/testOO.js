class Pizza {

  constructor(spice) {
    this.toppings = ["cheese"];
    this.spice = spice
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  set size(size) {
    if (size === 's' || size === 'm' || size === 'l') {
      this._size = size;
    }
  }

  getSize() {
    return this.size;
  }


  get price() {
    const basePrice = 10;
    const toppingPrice = 2;
    return basePrice + this.toppings.length * toppingPrice;
  }

}


// DRIVER CODE
const pizza = new Pizza();
pizza.setSize('m');
pizza.getSize(); // m
console.log(pizza)

let pizza1 = new Pizza("hot");
console.log(pizza1.toppings); // ["cheese"]
pizza1.addTopping("mushrooms");
pizza1.addTopping("peppers");
pizza1.setSize("s")
console.log(pizza1)
console.log(pizza1.getPrice())

let pizza2 = new Pizza("medium");
console.log(pizza2.toppings); // ["cheese"]
pizza2.addTopping("more cheese");
console.log(pizza2.toppings); // ["cheese", "more cheese"];
console.log(pizza2)

