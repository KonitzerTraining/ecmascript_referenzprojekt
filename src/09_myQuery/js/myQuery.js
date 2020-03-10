(function () { // IIFE

    // gültige Bezeichner: $ _ a234
    // ungültige Bezeichner: a-b 3a
    // Factory, weil ein Objekt erzeugt und die
    // Referenz an den Aufrufpunkt zurück gegeben wird
    function $(selector) { // Funktionen sind spezielle Objekte, Datentyp ist aber function
        var elements; // let besser, ab IE11

        if (typeof selector !== 'string') {
            throw new TypeError('Please use CSS-Style slector');
        }

        // private variable
        elements = document.querySelectorAll(selector); // => Closure

        // Revealed Module Pattern
        return {
            // Sammlung von Objekt-Methoden
            css: css,
        };

        function css (property, value) {
            console.log(elements);

            elements.forEach(function (element) {
                console.dir(element);
                element.style[property] = value;
            });
            // Chaining Pattern
            return this;
        }
    }

    window.myQuery = $;
}());
