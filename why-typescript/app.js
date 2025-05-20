/** 1) Auto-Completion Example:
 * Assume we are getting a user from API call or from outside our code
 */
var user = {
    firstName: 'John',
    lastName: 'Doe',
    role: 'Professor'
};
// Above we have simulated a user we are receiving from outside our file
console.log("first name is: ".concat(user.firstName));
console.log("last name is: ".concat(user.lastName));
console.log("role is: ".concat(user.role));
console.log(user);
