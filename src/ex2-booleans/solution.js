
class Person {
  constructor(name, age, weight, height) {
    this.name = name
    this.age = age
    this.weight = weight
    this.height = height
  }

  toString() {
    return `${this.name}: Age(${this.age}) Weight(${this.weight}) Height(${this.height})`
  }

  static create(name, age, weight, height) {
    return new Person(name, age, weight, height)
  }
}

function printPerson(person) {

  // Example
  let isNamedBetsy = person.name === "Betsy"
  if (isNamedBetsy) {
    console.log(`${person.name} is a great programmer!`)
  }

  // Can ride an amusement park ride?
  let canRideAmusementParkRide = person.height > 50
  canRideAmusementParkRide &= person.weight < 200
  canRideAmusementParkRide &= person.age > 14

  if(canRideAmusementParkRide) {
    console.log(`${person.name} can ride the amusement park ride`)
  } else {
    console.log(`${person.name} can not ride the amusement park ride`)
  }

  let isObese = person.height > 200 && person.weight > 300
  isObese |= person.height > 50 && person.weight > 100
  isObese |= person.height > 40 && person.weight > 50

  // Is obese?
  if(isObese) {
    console.log(`${person.name} is obese`)
  } else {
    console.log(`${person.name} is not obese`)
  }

  let isChild = person.age >= 29
  isChild &= person.name != "Terrance"
  // Is child?
  if(isChild) {
    console.log(`${person.name} is a child`)
  } else {
    console.log(`${person.name} is a child`)
  }
}


function main() {
  let people = [
    Person.create("Betsy", 14, 50, 100),
    Person.create("Andrew", 18, 62, 110),
    Person.create("Alice", 28, 48, 200),
    Person.create("Terrance", 29, 200, 175),
    Person.create("Caitlin", 70, 40, 80),
  ];

  people.map((person) => {
    printPerson(person);
  })
}


if (typeof module != 'undefined' && !module.parent) {
  main()
}