class Project {

    constructor() {
        this.a = '243';
        this.b = '924';
    }

    // Generator
    // Methode
    // Bezeichner ist ein Symbol
    * [Symbol.iterator]() {
        for (let k in this) {
            if (this.hasOwnProperty(k)) {
                yield {value: [k, this[k]], done: false}
            }
        }
        yield {value: undefined, done: true}
    }
}

let p = new Project();
for (let key in p) {
    if (p.hasOwnProperty(key)) {
        console.log(key, p[key]);
    }
}

for (let entry of p) {
    console.log(entry);
}
