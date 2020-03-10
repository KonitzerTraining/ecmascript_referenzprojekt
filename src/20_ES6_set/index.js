let items = [3,4,5,3,4,3,2,3];
let list = new Set(items); // ab ES6
console.dir(Set);

console.log(list);
console.log(Array.from(list));

let o1 = {a: 1};
let o2 = {b: 2};
let list1 = [o1, o2, o2, o1, o2];
let oSet = new Set(list1);
console.log(oSet);

let list2 = [2,3,4];
console.log(list2);

// ES6 for-of
for(let v of list2) {
    console.log(v);
}
for(let [key, value] of list2.entries()) {
    console.log(key, value);
}
for(let value of list) {
    console.log(value);
}
