const EventEmitter = require('node:events');

class PizzaShop extends EventEmitter{
    constructor() {
        super();
        this.orderNum = 0;
    }

    order(size){
        this.orderNum++;
        this.emit('order', size);
    }
    
    displayOrderNum(){
        console.log(`Current order number is: ${this.orderNum}`);
    }
}

module.exports = PizzaShop;