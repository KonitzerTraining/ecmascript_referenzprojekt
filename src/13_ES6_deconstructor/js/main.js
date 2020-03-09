// Deconstructor
let list = ['buch', '234.34234', 'J.R', '2', 'asdf'];

let [title, isbn, author = '', ...metadata] = list;
console.log(title);
console.log(isbn);
console.log(author);
console.log(metadata);

let address = {
    street: 'Bahndamm',
    plz: '98693',
    city: 'Ilmenau',
};

let {street, plz: zip, city, phone = null} = address;
console.log(street);
console.log(zip);
console.log(city);
console.log(phone);

setOrder(address);

function setOrder({street, plz: zip} = null) {
    console.log(street)
}

// Rest Operator ...
// Spread Operator ...

let list1 = [3, 4, 5, 234, 45, 456, 243, 123, 345, 46];
Math.max(...list1); // Spread

compute(...list1);

function compute(a, b, ...c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

