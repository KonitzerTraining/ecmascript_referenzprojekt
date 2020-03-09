/*
Alls Scopes auf einem Blick
Global Object (window === this)
Global Scope
Function Level Scope
Block Level Scope

Closure

Context (this)
 */
/*
// Pflichtangabe für guten Code!!
"use strict"; // ab IE 10
*/

// Global Object (möglichst vermeiden)
// Global Properties

// ES3
a = 'globale Variable - schlecht';
var aVar = 'auch global';

console.log(a);
console.log(aVar);
console.log(window); // Global Object
console.log(window.a); // Global Property
console.log(window.aVar);


// ES6
// let und const -> ab IE11
// Global
let aLet = 'global mit let';
const APICODE = 'globale Konstante';
console.log(window.aLet);
console.log(window.APICODE);

console.log(aLet);
console.log(APICODE);

f1('test'); // Ausführbar, obwohl noch nicht definiert
function f1 (p) {
    console.log(p);
    console.log(a, aVar, aLet, APICODE);

    // Achtung Kopplung, wegen Global
    b = 'eigenschaft von window -> global';

    var bVar = 'lokal zur Funktion';
    let bLet = 'lokal zur Funktion';

    // anonymer Block (oder if, for, ...)
    {
        let cLet = 'lokal zum Block';
        var cVar = 'lokal zur Funktion'; // Bricht aus
        console.log(cLet); // => error
    }

    console.log(cVar); // => error
 //   console.log(cLet); // => error
}

/*
Hoisting
1. Code correction
Alle Fuktionsdefinitionen werden und alle Variablendeklarationen mit var
werden an den Anfang des aktuellen Sichtbarkeitsbereichs verschoben (Function)
2. Ausführung der Anweisungen
*/


// f2(); // mit let => error, mit var => undefined


// Funktionsausdruck
let f2 = function () {
// var f2 = function () {
    // var wertX = undefined;
    console.log(wertX);
    wertX = 'new';

    //var wertX = 'innen';
    //let wertX = 'innen'; // let ist besser

    console.log(wertX);
};

let wertX = 'aussen';
f2();
console.log(wertX);
