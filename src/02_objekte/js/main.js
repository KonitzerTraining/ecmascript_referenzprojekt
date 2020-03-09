// ES3
/*
Object ist eine Funktion
 */
let o = new Object();
console.log(typeof Object);
o.color = 'green';
console.log(o);

// let ist ES6
// object literal notation
let o1 = {
    color: 'yellow',
};
console.log(o1);
console.log(o1.__proto__);
console.log(typeof o1);

// ES 6
class Haus {

}

console.log(typeof Haus);

// Alle Funktionen sind Objekte
let f3 = new Function ('console.log("aha");');
f3();

function sayColor () {
}

console.dir(sayColor);
