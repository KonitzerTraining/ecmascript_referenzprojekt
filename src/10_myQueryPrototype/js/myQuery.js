window.myQuery = window.myQuery || (function () {
    "use strict";

    function _$ (collection) {
        this.collection = collection;
    }

    _$.prototype.css = function (property,value) {
        this.collection.forEach(function (element) {
            console.dir(element);
            element.style[property] = value;
        });
        // Chaining Pattern
        return this;
    };

    function $(selector) {
        let collection = document.querySelectorAll(selector);
        return new _$(collection);
    }

    return $;
}());