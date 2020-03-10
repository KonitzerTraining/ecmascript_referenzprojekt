"use strict";

// let Project = class {
class Project {
    constructor(title) { // Alias auf die Funktion Project

        // lokal Variable (private)
        let id = 'asldfkj';
        // ES6 Reflect API
        Reflect.defineProperty(this, 'title', {
            value: title,
            enumerable: true
        });

        Reflect.defineProperty(this, 'id', {
            get: () => {
                return id;
            },
            enumerable: true
        });

    }

    // Project.prototype.partner = function () {return 'a,b,c'}
    partner () {
        return 'a,b,c';
    }

    get pid () {
        return this.__id__;
    }

    // Project.info
    static get info () {
        return 'demo';
    }
}

console.dir(Project);
console.log(typeof Project);

let p1 = new Project('Fabrik');
console.log(p1);
console.log(p1.partner());
console.log(p1.pid);
//p1.title = 234;
console.log(p1.title);

Object.keys(p1).forEach((key) => {
    console.log(key);
});


console.log(Project.info);
console.log(p1.id);

/*
main.js:56 Uncaught TypeError: Cannot set property id of #<Project> which has only a getter
    at main.js:56
*/
p1.id = '2q43r';