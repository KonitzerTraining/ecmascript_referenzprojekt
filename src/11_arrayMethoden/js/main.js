let list01 = [3, 43, 5];

let list02 = list01.filter((item) => {
    return item > 4;
});

console.log(list01);
console.log(list02);

let searchTerm = 'Baum';
let products = [
    {
        id: 1,
        title: 'Baum'
    },
    {
        id: 2,
        title: 'Strauch'
    },
    {
        id: 3,
        title: 'Baum'
    },
];

let searchResults = products.filter((product) => {
    return product.title === searchTerm;
});

console.log(searchResults);

// reducer

let list03 = [0, 1, 2, 3];

let sum = list03.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    },
    0).toString(10);

console.log(sum);
// sum is 6

