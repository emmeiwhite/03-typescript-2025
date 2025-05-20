let value: number = 2

function sumTS(num1: number, num2: number) {
  return num1 + num2
}

console.log(sum(value, 5))

function calculateSumTS(numbers) {
  return number.reduce((acc, item) => {
    return acc + item
  }, 0)
}

calculateSumTS([2, 3, 4, 5])
