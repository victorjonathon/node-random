const PizzaShop = require('./modules/pizza-shop');
const Drinks = require('./drinks');

const pizzaShop = new PizzaShop();
const drinks = new Drinks();

pizzaShop.on('order', (size) => {
    console.log(`Baking your ${size} pizza`);
    drinks.serveDrink(size);
});

pizzaShop.order('large');
pizzaShop.displayOrderNum();