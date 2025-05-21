/** GENERICS EXAMPLE:
 *  A function which takes array of objects of certain contract (types) and returns on object of that type.
 */
interface HasAge {
  age: number
}

function getOldest(people: HasAge[]): HasAge {
  // DSA: Find oldest in an array. Sort it and return first element

  return people.sort((a, b) => {
    return b.age - a.age
  })[0]
}

const people: HasAge[] = [{ age: 30 }, { age: 33 }, { age: 25 }]

getOldest(people)
