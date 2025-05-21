// Generics in action: Assume we have two types of objects both having a common property age. Let's see how GENERICS helps to make sure one function handles both types of Objects.
// A fxn takes array of objects of type Age and returns the object with smallest age
function getOldestPerson(people) {
    return people.sort(function (a, b) { return b.age - a.age; })[0];
}
var oldestPerson1 = getOldestPerson([{ age: 10 }, { age: 34 }, { age: 39 }]);
console.log(oldestPerson1);
var persons = [
    { name: 'john', age: 34 },
    { name: 'kiki', age: 23 },
    { name: 'tuhu', age: 43 }
];
// ASSERTION: Not recommended
var oldestPerson2 = getOldestPerson(persons);
console.log(oldestPerson2);
// So what do we do actually, We use GENERICS
function getYoungest(people) {
    return people.sort(function (a, b) {
        return a.age - b.age;
    })[0];
}
var young1 = getYoungest(persons);
console.log(young1);
