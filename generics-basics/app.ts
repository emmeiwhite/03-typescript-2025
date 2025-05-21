import { log } from 'console'

/** --- Generics Example: Learning
 * ASSUME WE HAVE GOT A LOGGER FUNCTION WHICH LOGS DIFFERENT TYPES
 * --- */
function logString(arg: string) {
  console.log(arg)
  return arg
}

logString('3')

function logNumber(arg: number) {
  console.log(arg)
  return arg
}

logNumber(34)

function logArr(arg: any[]) {
  console.log(arg)
  return arg
}

logArr([2, 3])

/**
 * We are repeating same lines of code in all the functions:
 *   
     console.log(arg)
     return arg

     which is considered a bad practice.

     Now, we can go with any keyword but that will be a bad option.

     Instead we make use of GENERIC TYPE - which can take any type of arguments in an efficient way
 */

/** --- Writing my first Generic Line of code and very excited about this --- */
function logAnything<T>(arg: T): T {
  console.log(arg)
  return arg
}

console.log(logAnything([2, 3, 4]))
console.log(logAnything({ age: 33 }))
console.log(logAnything('Keep moving forward'))
