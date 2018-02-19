//////////////// OBJECT DESTRUCTURING /////////////////
// const person = {
//   name: 'Logan',
//   age: 35,
//   location: {
//     city: 'Fort Worth',
//     temp: 50
//   }
// };

// // INSTEAD OF:
// // const name = person.name;
// // const age = person.age;
// const { name, age, location } = person;
// console.log(`${name} is ${age}.`);

// // INSTEAD OF:
// // if (person.location.city && person.location.temp) {
// //     console.log(`He lives in ${person.location.city}, which is ${person.location.temp} degrees.`)
// // }

// // const { city, temp } = person.location;
// // If you want to rename the variables you would need to use modified syntax.
// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`He lives in ${city}, which is ${temperature} degrees.`);
// }

// // You can set defaults, and you can do both set defaults and rename a variable.
// const { name: firstName = 'Anonymous', age: currentAge } = person;
// console.log(`${firstName} is still ${currentAge}.`);

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName); // Penguin, Self-Published (default)

//////////////// ARRAY DESTRUCTURING /////////////////
const address = ['1234 Sesame Street', 'Dallas', 'Texas', '11223'];

// const [street, city, state, zip] = address;

// If you don't want to define all values in the array
// you can set it up like this, you just need to account for any
// values before or between the values you are trying to extract.
const [, city, state] = address;

console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName = 'Coffee (cold)', , medCost] = item;

console.log(`A medium ${itemName} costs ${medCost}.`);
