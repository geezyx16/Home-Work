const myToppings = ["pepperoni", "chicken", "mushroom", "cheese"];

const customer = function greetCustomer() {
  console.log(`Welcome to Pizza House!Our toppings are ${myToppings}.`)
}

customer();

function getPizzaOrder(size, crust, ...amount) {
console.log(`One ${size} ${crust} pizza with ${amount} coming up!`);
console.log(`${size}, ${crust}, ${amount}`);
}

getPizzaOrder("large", "thick", "cheese and pepperoni");



// function preparePizza({size, crust, ["pepperoni", "cheese", "chicken"]}) {
//   console.log
// }


