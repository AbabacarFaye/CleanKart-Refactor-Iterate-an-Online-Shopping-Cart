// shoppingCart_v1_bad.js

let cart = [];

function add(p, q, pr) {
  cart.push({p:p, q:q, pr:pr});
}

function show(){
  let t=0;
  for(let i=0;i<cart.length;i++){
    let it=cart[i];
    let s=it.q*it.pr;
    t+=s;
    console.log(it.p+" "+it.q+" "+s);
  }
  console.log("total="+t);
}

function discount(type){
  let total=0;
  for(let i=0;i<cart.length;i++){
    total+=cart[i].q*cart[i].pr;
  }

  if(type=="vip"){
    total=total*0.8;
  }else if(type=="regular"){
    total=total*0.9;
  }

  return total;
}

// shoppingCart_v2_refactor.js

let cart = [];

function addItem(name, quantity, price) {
  cart.push({ name, quantity, price });
}

function calculateTotal() {
  return cart.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);
}

function viewCart() {
  cart.forEach(item => {
    let subtotal = item.quantity * item.price;
    console.log(`${item.name} x${item.quantity} = ${subtotal}`);
  });

  console.log("Total:", calculateTotal());
}


class DiscountStrategy {
  apply(total) {
    return total;
  }
}


class VIPDiscount extends DiscountStrategy {
  apply(total) {
    return total * 0.8;
  }
}

class RegularDiscount extends DiscountStrategy {
  apply(total) {
    return total * 0.9;
  }
}



class ShoppingCart {

  constructor(discountStrategy){
    this.items = [];
    this.discountStrategy = discountStrategy;
  }

  addItem(item){
    this.items.push(item);
  }

  calculateTotal(){
    let total = this.items.reduce((sum,item)=>{
      return sum + item.price * item.quantity;
    },0);

    return this.discountStrategy.apply(total);
  }

}



class ProductSubject {

  constructor(){
    this.observers = [];
  }

  subscribe(observer){
    this.observers.push(observer);
  }

  notify(product){
    this.observers.forEach(o => o.update(product));
  }

}



class UserObserver {

  update(product){
    console.log(`Price dropped for ${product.name}! New price: ${product.price}`);
  }

}




class Product {
  constructor(builder){
    this.name = builder.name;
    this.price = builder.price;
    this.category = builder.category;
    this.stock = builder.stock;
  }
}

class ProductBuilder {

  setName(name){
    this.name = name;
    return this;
  }

  setPrice(price){
    this.price = price;
    return this;
  }

  setCategory(category){
    this.category = category;
    return this;
  }

  setStock(stock){
    this.stock = stock;
    return this;
  }

  build(){
    return new Product(this);
  }

}



const product = new ProductBuilder()
  .setName("Laptop")
  .setPrice(1200)
  .setCategory("Electronics")
  .setStock(10)
  .build();
