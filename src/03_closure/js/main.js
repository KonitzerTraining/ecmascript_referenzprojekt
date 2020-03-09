
// Factory Pattern
function system () {
    // private Variable
    // Array literal notation []
    let basket = ['Versicherung']; // kommt in den Closure
    let info = '2q34'; // nicht im Closure

    // Erzeugt ein Objekt
    return { // Object literal notation
        add: function (item) {
            basket.push(item);
        },
        getBasket: function () {
            return basket.slice();
        }
    };
}

let minishop = system();
let myShop = system();

// myShop.add('Pferd');
minishop.add('Auto');
minishop.add('Auto');

console.log(minishop.getBasket());

delete minishop.add;
delete minishop.getBasket;

