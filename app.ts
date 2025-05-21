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

interface Player {
  name: string
  age: number
}

let players: Player[] = [
  { name: 'john', age: 33 },
  { name: 'mike', age: 20 },
  { name: 'harry', age: 43 }
]

getOldest(players) // The getOldest function will not throw any warning, since age property is present in Player interface but we cannot access name property with this approach, For example if we try to do getOldest(players). (we only get auto-suggestion for age )

// We can do ASSERTION here but that is not considered a good practice

const player2 = getOldest(players) as Player
player2.name // we can access the name now with assertion
