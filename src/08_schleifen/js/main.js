// Liste per array literal notation
let liste1 = [3, 'text', 5];
liste1.color = 'blue'; // geht, da object
liste1[13] = 234;
console.log(liste1);

console.log(liste1.constructor.name);
console.log(liste1.constructor.prototype);

// Jedes Element einer Liste verwenden, neue Liste erstellen
let liste2 = liste1.map((item) => item * 2);
console.log(liste2);

// ES5
// forEach nimmt nur die nummerischen Schlüssel
liste1.forEach((item, index) => {
    console.log(index, item);
});

// ES6 - funktionier anders als forEach!
for (let value of liste1) {
    console.log(value);
}

for ([key, value] of liste1.entries()) {
    console.log(key, value);
}

// ES3 - for in ist für Objekte
for (let key in liste1) {
    if (liste1.hasOwnProperty(key)) {
        console.log(key, liste1[key]);
    }
}
console.log(liste1.color);

let articlesClassic = document.getElementsByTagName('article');
console.log(articlesClassic);
/*
articlesClassic.forEach(function (item) {
    console.log(item);
});
*/

let ariclesNew = document.querySelectorAll('article');
console.log(ariclesNew);

ariclesNew.forEach(function (item) {
    console.log(item);
});

for (let el of articlesClassic) {
    console.log(el);
}

/*
Objekte => for-in, Object.keys().forEach()

Lists, e.g. Array, NodeList, HTMLCollection =>
for(), forEach, for-of
 */
