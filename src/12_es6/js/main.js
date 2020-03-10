// neues Schlüsselwort let
let a = 'Scoped Variable'; // Block Level Variable

// Konstante
// üblicher als Variablen
const CODE = 'unveränderlich'; // Uppercase convention
const OBJEKT = {
};

OBJEKT.color = 'red';

// OBJEKT = 243;

// Funktionen können default erhalten
function comp (x= 1) {
    console.log(x);
}
comp();

// Zeichenketten
// ES3 '' oder ""
// template literal notation
// caps-backtick space
let text = `
Mehrzeiliger 
    ${helper(`948598938`) + '0001'} 
Text
` + `34`;
console.log(text);

function helper(y) {
    return '0049' + y;
}