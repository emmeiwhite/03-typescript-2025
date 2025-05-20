function findSum(arr: Array<number>) {
  return arr.reduce((acc: number, num: number) => {
    return (acc = acc + num)
  }, 0)
}

const result = findSum([1, 2, 3, 4])
console.log(result)
