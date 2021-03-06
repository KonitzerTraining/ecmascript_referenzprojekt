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

// ES3
let o1 = {
    title: 'Baum'
};
o1.type = 'Eiche';

// ES5
Object.defineProperties(o1, {
    place: { // Property descriptor map
        value: 'Nordeuropa',
        enumerable: true
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
    console.log(key, o1[key]);
}

Object.seal(o1);
//delete o1.type;

console.log(o1);
// besser als for-in

let keys = Object.keys(o1);
console.log(keys);

// ES5 forEach - Alternative für eine for-Schleife
keys.forEach(function (key) {
    console.log(key, o1[key]);
});

let x = Object.create(
    // 1. Parameter ist der Prototype des neuen Objekts
    {
        info: '2134',
        // Method
        play: function () {
            console.log('läuft');
        },
        constructor: Date // funktioniert, ist Quatsch
    },
    // 2. Parameter sind die Eigenschaften / Properties des neuen Objects
    {
        title: {
            value: 'Baum',
            enumerable: true
        },
        __id__: {
            value: '2038243098',
            writable: true
        },
        id: {
            // Getter funktionieren hier anders als in Java!
            get: function () {
                return this.__id__;
            },
            set: function (newId) {
                this.__id__ = newId;
            }
        }
    });
console.log(x);
console.log(x.id);
x.id = '4309ogjsdy';

/*
let myArray = Object.create(Array.prototype, {

    getFrames: {
        value: function () {
            return this.getSeconds / 60;
        }
    }
});

console.log(myArray.getFrames());
console.log(myArray.push(234));
console.log(myArray);
*/


// ES3: Prototype muss gefiltert werden
for (let key in x) {
    if (x.hasOwnProperty(key)) {
        console.log(key);
    }
}

// ES5: Prototype wird ignoriert - besser
Object.keys(x).forEach(function (key) {
    console.log(key, x[key]);
});


// ES 6
let y = {};
Reflect.defineProperty(y, 'title', {
    value: 'aha'
});

console.log(y);
