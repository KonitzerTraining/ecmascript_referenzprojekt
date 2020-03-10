let list = ['Herr der Ringe', '234.34234', 'J.R. Tolkien', 'Amazon Rank: 39893', '1937'];

// Deconstructor
// Rest-Operator ... => Array
// Default-Werte möglich
let [title, isbn, author = null, ...metadata] = list;

console.log(title);
console.log(isbn);
console.log(author);
console.log(metadata);

let address = {
    street: 'Bahndamm',
    plz: '98693',
    city: 'Ilmenau',
};

// Default-Werte möglich
// Alias mit :
let {street, plz: zip, city, phone = null} = address;
console.log(street);
console.log(zip);
console.log(city);
console.log(phone);

setOrder(address);

function setOrder({street = null, plz: zip = null}) {
    console.log(street)
}

// Rest Operator ...
// Spread Operator ...

let list1 = [3, 4, 5, 234, 45, 456, 243, 123, 345, 46];
let maxValue = Math.max(...list1); // Spread
console.log(maxValue);

compute(...list1);

function compute(a, b, ...c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

let o1 = {
    id: 3,
    title: 'Überschrift',
};

let o2 = {
    ...o1, // Spread auf Object möglich
    author: 'me'
};
console.log(o2);

