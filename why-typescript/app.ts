/** 1) Auto-Completion Example:
 * Assume we are getting a user from API call or from outside our code
 */

const user = {
  firstName: 'John',
  lastName: 'Doe',
  role: 'Professor'
}

// Above we have simulated a user we are receiving from outside our file

console.log(`first name is: ${user.firstName}`)
console.log(`last name is: ${user.lastName}`)
console.log(`role is: ${user.role}`)

console.log(user)
