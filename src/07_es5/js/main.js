/*
Object.
    freeze
    seal
    create
    defineProperty
    defineProperties
    keys
 */
"use strict";

let o1 = {
    title: 'Baum'
};
o1.type = 'Eiche';

Object.defineProperties(o1, {
    place: { // Property descriptor map
        value: 'Nordeuropa',
        enumerable: false
    },
});
Object.defineProperty(o1, 'bestand', {
    value: '1Mrd',
    enumerable: false,
    configurable: true, // löschbar
    writable: true
});

console.log(o1);

for (let key in o1) {
    console.log(key);
}

Object.seal(o1);
//delete o1.type;

console.log(o1);
// besser als for-in
Object.keys(o1).forEach(function (key) {
    console.log(key, o1[key]);
});

let x = Object.create({
    info: '2134',
    play: function () {
        console.log('läuft');
    }
}, {
    title: {
        value: 'Baum',
        enumerable: true
    }
});
console.log(x);

// ES5: Prototype wird ignoriert
Object.keys(x).forEach(function (key) {
    console.log(key, x[key]);
});

// ES3: Prototype muss gefiltert werden
for (let key in x) {
    if (x.hasOwnProperty(key)) {
        console.log(key);
    }
}

// ES 6
let y = {};
Reflect.defineProperty(y, 'title', {
    value: 'aha'
});

console.log(y);
