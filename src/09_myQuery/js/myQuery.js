(function (a, b, c, d, e) {

    function $(selector) {

        if (typeof selector !== 'string') {
            throw new TypeError('Please use CSS-Style slector');
        }

        let elements = document.querySelectorAll(selector);

        return {
            css: function (property, value) {
                console.log(elements);
                elements.forEach(function (element) {
                    console.dir(element);
                    element.style[property] = value;
                });
                // Chaining Pattern
                return this;
            }
        }
    }

    window.$ = $;
}(4, 5, 6));
