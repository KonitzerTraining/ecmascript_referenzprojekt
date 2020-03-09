"use strict";

// let Project = class {
class Project {
    constructor(title) {
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

    partner () {
        return 'a,b,c';
    }

    get pid () {
        return this.__id__;
    }

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