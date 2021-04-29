const sort = require("./sort");
const data = require("./data.json")
/**
 * Sort the array of customers by first and last name
 * @param {array} customers
 */

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
// String.prototype.locale.Compare() - method returns a number indicating whether a reference string comes
//                    before, or after, or is the same as the given string in sort order.

function sortByName(customers) {
    // sort by "first name" first 
    const byFirstName = sort((a, b) => a.firstName.localeCompare(b.firstName), customers)
    // call sorted lastname and firstname
    return sort((a, b) => a.lastName.localeCompare(b.lastName), byFirstName);
}

// lastName = .sort((a, b) => a - b); // For ascending sort -1 
// lastName = .sort((a, b) => b - a); // For descending sort 1[]

// Array of Strings
// const teams = ['Real Madrid', 'Manchester Utd', 'Bayern Munich', 'Juventus'];
// teams.sort(); // ['Bayern Munich', 'Juventus', 'Manchester Utd', 'Real Madrid'] => .sort((a, b) => a - b); // For ascending sort -1 

// Array of Numbers
const numbers = [3, 23, 12]
numbers.sort() // -> [3,12,23]
numbers.sort(function(a,b){return a-b}); // -> 3, 12, 23
numbers.sort(function(a,b){return b-a}); // -> 23, 12, 3

// sort() -1, 0, 1
// if the result is negative, "a" is sorted before "b" ex. -1
// if the result is 0, nothing changes ex. 0
// if the result is positive, "b" is sorted before "a" ex. 1

// Mitchell, teddy
// Cariaga, travis
// Thompson, isabel

// isabel, teddy, travis => // sorting FirstName
// cariaga, mitchell, thompson  => // sorting lastName

// cariaga, travis  => // sorting both lastName, FirstName
// mitchell, teddy
// thompson, isabel

//console.log("this is our data: ", sortByName(data));
module.exports = sortByName;