// ES3

// Einfaches Objekt
// new ist ein Schlüsselwort zur Objekt-Erstellung
// Object ist eine Funktion! Klassen gibt es in JS nicht
let o = new Object();
console.log(typeof Object);


// Hinzufügen von Eigenschaften via .
o.color = 'green';
o['title'] = 'Headline';
console.log(o);

// object literal notation
let o1 = {
    color: 'yellow',
};
console.log(o1, typeof o1);

console.log(o1['color']);
console.log(o1.color);

// Fast jedes Object hat einen Prototyp
console.log(o1.__proto__);
console.log(Object.prototype === o1.__proto__);


// ES 6 - neue Schreibweise
class Haus {
}
console.log(typeof Haus);
let h = new Haus();
console.log(h);


// Alle Funktionen sind Objekte
let f3 = new Function ('console.log("aha");');
f3();
console.log(typeof f3);

// Eigene Objekt
function Person () {

}

let p = new Person();
console.log(p);

// Wrapper type
let t1 = 'Text';
console.log(typeof t1);
console.log(t1.constructor);
console.log(typeof String);