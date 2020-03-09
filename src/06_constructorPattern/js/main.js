let Project = (function () {

    // Constructor
    function Project(title, person) {
        let id = '023948';

        this.title = title;
        this.person = person;
        this.status = 'läuft';
        this.getId = function () {
            return id;
        }
    }

    // Prototypal extension
    Project.prototype.stop = function () {
        this.status = 'gestoppt';
    };

    // static
    Project.isProject = function (p) {
        return p.constructor === Project;
    };

    return Project;

}());

let p1 = new Project('Bauplatz', 'Müller');
let p2 = new Project('Bauplatzsdf', 'Müller');
console.log(p1);

console.log(p1.constructor === Project);

console.dir(document.querySelector('h1'));
console.log(p1.status);
p1.stop();
console.log(p1.status);