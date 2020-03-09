//"use strict";

var color = 'green';

console.log(color);
console.log(window.color);
console.log(this.color);

/*
Window ist das globale Object, this ist der globale Kontext
 */
// Bitte immer === anstatt == verwenden
console.log(window === this);

function sayColor(p) {
    // this enthält den Kontext, der beim
    // Aufruf con sayColor gilt
    console.log(p, this.color);
  //  this.project = p;
}

window.sayColor('global');
sayColor('global');

let contextA = {
    color: 'red'
};
sayColor.call(contextA, 'mit contextA');
sayColor.apply(contextA, ['mit contextA']);

let contextB = {
    color: 'yellow',
    //sayColor: sayColor
    sayColor // ES6 Kurzschreibweise
};

contextB.sayColor('via ContextB');

let contextC = {
    color: 'blue',
    sayColor: function (p) {
        console.log(p, this.color)
    }
};

contextC.sayColor('via ContextC');
let kopie = contextC.sayColor;
kopie('als Kopie'); // window.kopie();

btn1.addEventListener('click', function () {
  console.dir(this);
});

//ES 3
let _this = this; // window
btn2.addEventListener('click', function () {
    console.log(this); // btn2
    console.log(_this); // _this === window
});

//ES 5 IE 8 / 9
btn3.addEventListener('click', function (event) {

    console.log(this);
    console.log(event.target);

}.bind(this)); // this === window


//ES 6 , ab Edge
// Arrow Function
// this wird bei der Definition der Arrow-Funktion
// definiert
btn4.addEventListener('click', (event) => {
    console.log(this);
    console.log(event.target);
});

let fY = (x) => {
    return x * x;
};

let erg = fY(5);
console.log(erg);

let fY2 = x => x * x;
let erg2 = fY2(5);
console.log(erg);

// Constructor Pattern
function Person (name) {
    this.name = name;
}

/*
new erstellt Context(Objekt)
Person erweitert context
new gibt Referenz zurück
 */
let p = new Person('Hans');
console.log(p);

// Exot: ES5
let oX = Object.create(null, {});
oX.color = 'green';
console.log(oX);
console.log(oX.constructor);
