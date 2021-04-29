// const customers = require("./data.json");
//const data = require("./data.json");
/**
 * Return the index of the customer with given email, otherwise -1.
 * @param {string} email The email address to search for
 * @param {*} customers The array to search
 */

// binary search - time complexity O(log n)
// linear search - time complexity O(n)

// function searchByEmail(email, customers) {
//     for(let i = 0; i < customers.length; i++) {
//         if(customers[i].email.toLowerCase() === email.toLowerCase()) {
//             return i;
//         }
//     }
//     return -1;
// }
const customers = [
    {
        "username": "Maude.Torp",
        "email": "Taya.Kerluke53@gmail.com",
    },
    {
        "username": "Brendan_Lehner",
        "email": "Chelsey.Little@gmail.com",
    },
    {
        "username": "Ruth53",
        "email": "Gaston29@yahoo.com",
    },
    {
        "username": "Shanie76",
        "email": "Randi20@hotmail.com",
    },
]

function searchByEmail(email, customers) {
    let low = 0;
    let high = customers.length - 1;
    let guess, mid;
    
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        guess = customers[mid].email.toLowerCase();

        if (guess === email.toLowerCase()) return mid;
        if (guess < email.toLowerCase()) low = mid + 1;
        else high = mid - 1;
    }
    return null;
};
console.log("this is our data: ", searchByEmail("Chelsey.Little@gmail.com", customers));

module.exports = searchByEmail;