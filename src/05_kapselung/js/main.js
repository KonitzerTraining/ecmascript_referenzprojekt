
/*let erg = function main () {
    return 1;
}();*/


// Immediately invoked function expression
// iife
// Variante 1:
// order operator
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
