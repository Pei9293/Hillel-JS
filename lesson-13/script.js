
const hamburgerSmall = new Hamburger(Hamburger.SIZE_SMALL);

const hamburgerMiddle = new Hamburger(Hamburger.SIZE_MIDDLE);

const hamburgerBig = new Hamburger(Hamburger.SIZE_BIG);

function Hamburger(size) {
  this.price = size.price,
  this.callories = size.callories
}

Hamburger.prototype.addTopping = function(topping) {
  this.price += topping.price
  this.callories += topping.callories
}

Hamburger.prototype.receiveOrder = function() {
  console.log(`hamburger with price ${this.price}$ and ${this.callories} callories`)
}

hamburger.addTopping(Hamburger.TOPPING_CHEESE);

hamburger.addTopping(Hamburger.TOPPING_SALAD)

hamburger.addTopping(Hamburger.TOPPING_POTATO);

hamburger.addTopping(Hamburger.TOPPING_FLAVORING);

hamburger.addTopping(Hamburger.TOPPING_MAYO);



 

Hamburger.SIZE_SMALL = {
  price: 50 ,
  callories: 20 
}

Hamburger.SIZE_MIDDLE = {
  price: 75 ,
  callories: 30 
}

Hamburger.SIZE_BIG = {
  price: 100 ,
  callories: 40 
}