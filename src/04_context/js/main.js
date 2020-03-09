var color = 'green';

console.log(color);
console.log(window.color);
console.log(this.color);

// Bitte immer === anstatt == verwenden
console.log(window === this);

function sayColor(p) {
    console.log(p, this.color);
  //  this.project = p;
}

sayColor('global');

let contextA = {
    color: 'red'
};
sayColor.call(contextA, 'mit contextA');
sayColor.apply(contextA, ['mit contextA']);

let contextB = {
    color: 'yellow',
    sayColor: sayColor
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
kopie('als Kopie');

btn1.addEventListener('click', function () {
  console.log(this);
});

//ES 3
let _this = this;
btn2.addEventListener('click', function () {
    console.log(this);
    console.log(_this);
});

//ES 5 IE 8 / 9
btn3.addEventListener('click', function (event) {

    console.log(this);
    console.log(event.target);

}.bind(this));

//ES 6 , ab Edge
// Arrow Function
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

let oX = Object.create(null, {});
oX.color = 'green';
console.log(oX);
