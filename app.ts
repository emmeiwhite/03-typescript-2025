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
