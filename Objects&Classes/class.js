class Person {
  constructor (name, age, grade) {
    this.name = name
    this.age = age
    this.grade = grade
  }
  sayHello (person) {
    console.log('hello ' + person.name + ' and ' + this.name)
  }
}

let firstPerson = new Person('Pesho', 20, 5.5)
let secondPerson = new Person('Maria', 25, 6)
secondPerson.city = 'Sofia'

secondPerson.sayHello(firstPerson)
console.log(JSON.stringify(firstPerson))
console.log(JSON.stringify(secondPerson))
