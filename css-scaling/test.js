function Product(name, price) {
  this.name = name;
  this.price = price;

  this.showName => () {
    console.log(this.name);
  }

  return this;
}

function Fruit (name, price) {
  Product.call(this, name, price);
  this.
}

function Orange(name, price) {
  Fruit.call(this, name, price);
}
