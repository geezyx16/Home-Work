let pizzaPlace = 'Pizza Academy';
let numberOfToppings = 12;

console.log(pizzaPlace, typeof pizzaPlace);
console.log(numberOfToppings, typeof numberOfToppings);

console.log(`Pizza like none other! Only at ${pizzaPlace}, now offering ${numberOfToppings} variety of toppings.`);

if (numberOfToppings >= 10) {
    console.log('A whole lot of pizza')
} else{
    console.log('Quality, not quantity.')
}


for (let i = 1; i < numberOfToppings; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
