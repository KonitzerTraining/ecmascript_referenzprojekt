//ES6 Collections
// Array, Map, Set
let map = new Map();

console.log(Map.prototype);

// map.set(key, value)
let o1 = {id: 3, title: 'Haus'};
map.set(o1, 2);
map.set({id: 4, title: 'Baum'}, 1);
map.set({id: 5, title: 'Moped'}, 7);
console.log(map);

// map = [34,54,234,43];
for(let v of map) {
    console.log(v);
}

// for (let [key, value] of map) {
for (let [key, value] of map.entries()) {
    console.log(key, value);
}

for (let key of map.keys()) {
    console.log(key);
}

for (let value of map.values()) {
    console.log(value);
}

map.forEach((item) => {
    console.log(item);
});

let iterable = map.entries();
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());