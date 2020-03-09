let liste1 = [3, 'text', 5];
liste1.color = 'blue';
liste1[13] = 234;
console.log(liste1);

console.log(liste1.constructor.name);
console.log(liste1.constructor.prototype);

// Jedes Element einer Liste verwenden, neue Liste erstellen
let liste2 = liste1.map((item) => item * 2);
console.log(liste2);

// ES5
liste1.forEach((item, index) => {
    console.log(index, item);
});

// ES6
for (let value of liste1) {
    console.log(value);
}

for ([key, value] of liste1.entries()) {
    console.log(key, value);
}

// ES3 - for in ist für Objekte
for (let key in liste1) {
    if (liste1.hasOwnProperty(key)) {
        console.log(key);
        console.log(liste1[key]);
    }
}
console.log(liste1.color);
liste1.push('test');

console.log(liste1);

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

for (let el of ariclesNew) {
    console.log(el);
}

/*
Objekte => for-in, Object.keys().forEach()

Lists, e.g. Array, NodeList, HTMLCollection =>
for(), forEach, for-of

 */
