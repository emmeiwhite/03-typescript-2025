/** Example-1: Catching bugs */
let num1 = '2'
function sum(num1, num2) {
  return num1 + num2
}

console.log(sum(num1, 5))

/** Example-2: A bug un-noticed before running the code. */
function calculateSum(numbers) {
  return number.reduce((acc, item) => {
    return acc + item
  }, 0)
}

calculateSum([2, 3, 4, 5])
