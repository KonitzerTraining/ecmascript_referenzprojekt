// ES6 Datentyp Symbol

let s1 = Symbol.for('populate');
console.log(s1);

let s2 = Symbol();
console.log(s1 === s2);

let s1a = Symbol.for('populate');
console.log(s1 === s1a);

let l1 = [1];
console.log(l1);

console.log(Symbol.match);
console.dir(Symbol);