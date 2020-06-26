/**************** OBJECT DESTRUCTURING ********************/
/*const person = {
    age: 26,
    location: {
        city: 'London',
        temp: 22
    }
};

// const name = person.name;
// const age = person.age;
// esto es lo mismo que hacer las dos asociaciones de arriba 
const {name: firstname = 'Anonymous', age} = person;
console.log(`${firstname} is ${age}`);

const {city, temp: temperature} = person.location;
if (city && temperature){
    console.log(`it's ${temperature} in ${city}`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName);*/

/**************** ARRAY DESTRUCTURING ********************/

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, city, state = 'New York'] = address;

console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`)