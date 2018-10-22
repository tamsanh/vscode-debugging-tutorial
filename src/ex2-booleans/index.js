
class Person {
  constructor(name, age, weight, height) {
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
  if(person.height > 50 && !person.weight < 200 && person.age > 14) {
    console.log(`${person.name} can ride the amusement park ride`)
  } else {
    console.log(`${person.name} can not ride the amusement park ride`)
  }

  // Is obese?
  if(person.height > 200 && person.weight > 300) {
    console.log(`${person.name} is obese`)
  } else if (person.height > 50 && person.weight > 100) {
    console.log(`${person.name} is obese`)
  } else if (person.height > 40 && person.weight > 50) {
    console.log(`${person.name} is obese`)
  } else {
    console.log(`${person.name} is not obese`)
  }

  // Is child?
  if(person.age > 50) {
    console.log(`${person.name} is not a child`)
  } else if (person.age >= 29) {
    console.log(`${person.name} is not a child`)
  } else if (person.name == "Terrance") {
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