// Namespace pattern
window.myQuery = window.myQuery || (function () {
    "use strict";

    // Constructor Pattern
    function _$ (collection) {
        // Properties
        this.collection = collection;
    }

    // Prototypal extension
    // Methods
    _$.prototype.css = function (property,value) {
        this.collection.forEach(function (element) {
            console.dir(element);
            element.style[property] = value;
        });
        // Chaining Pattern
        return this;
    };

    // Factory
    function $(selector) {
        var collection = document.querySelectorAll(selector);
        return new _$(collection);
    }

    return $;
}());