/*
Global Object
Global Scope
Function Level Scope
Block Level Scope
Closure
Context
 */
/*
// Pflichtangabe!!
"use strict"; ab IE 10
*/

// Global Object
// Global Properties
// ES3
a = 'globale Variable - schlecht';
var aVar = 'auch global';

console.log(window);
console.log(window.a);
console.log(window.aVar);

// ES6
let aLet = 'global mit let';
const APICODE = 'globale Konstante';
console.log(window.aLet);
console.log(window.APICODE);

console.log(aLet);
console.log(APICODE);

f1();
function f1 () {
    console.log(a, aVar, aLet, APICODE);
    b = 'eigenschaft von window -> global';
    var bVar = 'lokal zur Funktion';
    let bLet = 'lokal zur Funktion';

    // anonymer Block
    {
        let cLet = 'lokal zum Block';
        var cVar = 'lokal zur Funktion';
    }

    // console.log(cLet); => error
}

/*
Hoisting
1. Code correction
Alle Fuktionsdefinitionen werden und alle Variablendeklarationen mit var
werden an den Anfang des aktuellen Sichtbarkeitsbereichs verschoben.
2. Ausführung der Anweisungen
*/

let wertX = 'aussen';
//f2();
console.log(wertX);
let f2 = function () {
    // var wertX = undefined;
    console.log(wertX);

    var wertX = 'innen';

    console.log(wertX);
};
f2();

