// Generics in action: Assume we have two types of objects both having a common property age. Let's see how GENERICS helps to make sure one function handles both types of Objects.

interface Age {
  age: number
}

// A fxn takes array of objects of type Age and returns the object with smallest age
function getOldestPerson(people: Age[]): Age {
  return people.sort((a, b) => b.age - a.age)[0]
}

let oldestPerson1 = getOldestPerson([{ age: 10 }, { age: 34 }, { age: 39 }])
console.log(oldestPerson1)

interface Person {
  name: string
  age: number
}

let persons = [
  { name: 'john', age: 34 },
  { name: 'kiki', age: 23 },
  { name: 'tuhu', age: 43 }
]

// ASSERTION: Not recommended
const oldestPerson2 = getOldestPerson(persons) as Person

console.log(oldestPerson2)

// So what do we do actually, We use GENERICS

function getYoungest<T extends Age>(people: T[]): T {
  return people.sort((a, b) => {
    return a.age - b.age
  })[0]
}

const young1 = getYoungest(persons)

console.log(young1)
