const { get } = require("https");

let toppings = ["pepperoni", "chicken", "mushroom", "cheese"];

function greetCustomer() {
  console.log("Welcome to Pizza House, our toppings are: ");
  let toppingsGreeting = "";
  for (let topping of toppings) {
    toppingsGreeting += topping + ",";
  }
  console.log(toppingsGreeting);
}

greetCustomer();


function getPizzaOrder(size, crust, ...amountOfToppings) {
  console.log(`One ${size} ${crust} pizza with ${amountOfToppings} coming up!.`);
  return [size, crust, amountOfToppings];

}

let order = getPizzaOrder("large", "stuffed crust", "pepperoni and cheese");

// console.log(order);


function preparePizza () {
  console.log("...Cooking pizza...");
  let pizza = {
    size: order[0],
    crust: order[1],
    toppings: order.slice(2)
  }
  return pizza;
}

// let myPizza = preparePizza(order);

// console.log(myPizza);


function servePizza(pizza) {
  console.log(`Order up! Here's your ${pizza.size} ${pizza.crust} pizza with ${pizza.toppings}. Enjoy!`);
  // return pizza;
}

// let order = getPizzaOrder("large", "stuffed crust", "pepperoni and cheese");
let myPizza = preparePizza(order);
servePizza(myPizza);





