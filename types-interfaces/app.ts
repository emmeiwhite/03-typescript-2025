// type (kisi object ka shape)

type User = {
  name: String
  age: number
}

const john: User = {
  name: 'John Doe',
  age: 30
}

console.log(john)

interface Bird {
  name: string
  color: string
}

const bird1: Bird = {
  name: 'sparrow',
  color: 'brown'
}

// Lets extend interface: Interface works only for the Object shape

interface WildBird extends Bird {
  height: number
}

const wBird1 = {
  name: 'ostrich',
  color: 'white'
}

// Union types : Only type supports this not interface
type Success = {
  status: 'success'
  data: string
}

type Failure = {
  status: 'error'
  message: string
}

type Response = Success | Failure

const res1 = {
  status: 'success',
  data: 'Here is your data'
}

const res2 = {
  status: 'error',
  message: 'Something went wrong'
}

// type can be primitives as well

type ID = number | string

let ID = 23
ID = '23'

// interface evenPrime  number; Not valid

type Product = {
  name: string
  price: number
  category: string
}

let watch = {
  name: 'titanic',
  price: 3454,
  category: 'manual wear'
}

interface Vehicle {
  make: string
  model: string
  year: number
}

interface Car extends Vehicle {
  seats: number
}

interface MotorCycle extends Vehicle {
  hasCarrier: boolean
}

let car: Car = {
  make: 'test car',
  model: '2025 latest model',
  year: 2025,
  seats: 5
}

let bike: MotorCycle = {
  make: 'test bike',
  model: '2020 old model',
  year: 2020,
  hasCarrier: false
}
