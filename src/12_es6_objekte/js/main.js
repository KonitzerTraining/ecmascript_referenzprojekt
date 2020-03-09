// ES3
// "use strict";
var oES3 = {
    title: 'Baum',
    3: 'Wald'
};
console.log(oES3);

var prop1 = 3;
console.log(oES3.title);
console.log(oES3['title']);
console.log(oES3[3]);
console.log(oES3[prop1]);

// ES5
var oES5 = {};
Object.defineProperties(oES5, {
    title: {
        value: 'Tanne',
        enumerable: true
        // default: nicht änderbar/löschbar
    },
    __id__: {
      value: 'sowas',
      writable: true,
    },
    id: {
        get: function () {
            return this.__id__;
        },
        set: function (n) {
            this.__id__ = n;
        }
    }
});

oES5.title = 'new'; // wird verworfen
console.log(oES5);
console.log(oES5.id);
oES5.id = 'soso';

console.log(oES5.id);


// ES6
let prop2 = 'color';
let projects = ['pwer342','03978'];
let fname = 'delete';
let oES6 = {
    __id__ : '001',
    title : 'Haus',
    [prop2]: 'blue',
    //projects: projects
    projects,
 //   add: function () {}
    add () {

    },
    [fname] (){
        console.log('delete it');
    },
    get id () {
        return this.__id__
    },
    set id (n) {
        this.__id__= n;
    },
};
oES6.delete();
console.log(oES6.id);
oES6.id = 'new';
console.log(oES6.id);