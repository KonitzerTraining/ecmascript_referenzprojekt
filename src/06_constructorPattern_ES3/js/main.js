// IIFE
let Project = (function () {

    // Constructor
    // Project ist eine Funktion
    function Project(title, person) {
        let id = '023948'; // private Variable => Closure

        // properties
        this.title = title;
        this.person = person;
        this.status = 'läuft';

        this.getId = function () {
            return id; // id aus dem nächst höheren Scope (Project)
        }
    }

    // methods
    // Prototypal extension
    Project.prototype.stop = function () {
        this.status = 'gestoppt';
    };

    // static method
    Project.isProject = function (p) {
        return p.constructor === Project;
    };

    return Project;
}());

let p1 = new Project('Bauplatz', 'Müller');
let p2 = new Project('Bauplatzsdf', 'Müller');
console.log(p1);
console.log(p1.getId());
console.log(p1.status);
console.log(p1.person);
console.log(p1.title);

/*
__proto__:
    stop: ƒ ()
    constructor: ƒ Project(title, person)
    __proto__: Object
 */
console.log(p1.__proto__);
console.log(Project.prototype);
console.log(Project.prototype === p1.__proto__);

console.log(p1.constructor === Project);

console.dir(document.querySelector('h1'));
console.log(p1.status);
//p1.stop();
console.log(p1.status);

stoppeProject(p1);

function stoppeProject(p) {
    if(!Project.isProject(p)) {
        throw new TypeError('no Project');
    }
    p.stop();
}