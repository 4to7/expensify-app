// object destructuring

// const person = {
//     name: 'Alex',
//     age: 33,
//     location: {
//         city: 'London',
//         temp: 25
//     }
// };

// const {name: firstName = 'Anon', age} = person;

// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = person.location;

// if (city && temperature) {
// console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     auther: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const {name: publisherName = 'self-published'} = book.publisher; 
// console.log(publisherName);  //invalid = self-published

//
// array destructuring
//

const address = ['1299 S Juniper Street', 'Philly', 'Pen', '12510'];

const [, city, state = 'New York'] = address;
console.log(`you are in ${city} ${state}.`);

const item = ['Coffee (iced)',,'$3.50'];

const [name,pxSm,pxM,pxL] = item;
console.log(`A medium ${name} costs ${pxM}`);
