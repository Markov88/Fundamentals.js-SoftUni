class Storage {
  constructor (capacity, totalCost, storage) {
    this.capacity = capacity
    this.totalCost = totalCost
    this.storage = storage
  }
  addProduct (product) {
    this.capacity = this.capacity - product.quantity
    this.storage = this.storage + product
  }
  getProducts () {
    this.storage.forEach(e => {
      console.log(JSON.stringify(e))
    })
  }
}

let productOne = {
  name: 'Cucamber',
  price: 1.50,
  quantity: 15
}
let productTwo = {
  name: 'Tomato',
  price: 0.90,
  quantity: 25
}
let productThree = {
  name: 'Bread',
  price: 1.10,
  quantity: 8
}
let storage = new Storage(50)
storage.addProduct(productOne)
storage.addProduct(productTwo)
storage.addProduct(productThree)
storage.getProducts()
console.log(storage.capacity)
console.log(storage.totalCost)
// console.log(storage)
