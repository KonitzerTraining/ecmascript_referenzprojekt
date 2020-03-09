// Immediately invoked function expression
// iife
// Variante 1:
(function () {
    "use strict";

    init();

    function init () {
        console.log('läuft...');
    }
}());

// Variante 2:
(() => {
    "use strict";

    init();

    function init () {
        console.log('läuft...');
    }
})();
