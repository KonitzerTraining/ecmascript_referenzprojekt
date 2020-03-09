// neues Schlüsselwort let
let a = 'Scope Variable';

// Konstante
// üblicher als Variablen
const CODE = 'unveränderlich';
const OBJEKT = {
};

OBJEKT.color = 'red';

// OBJEKT = 243;

// Funktionen können default erhalten
function comp (x = 1) {
    console.log(x);
}
comp();

// Zeichenketten
// ES3 '' oder ""
// template literal notation
let text = `
Mehrzeiliger 
    ${helper(`saf`)} 
Text
` + `34`;
console.log(text);

function helper(y) {
    return 'ok' + y;
}