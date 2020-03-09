class Produkt {
    constructor(title, price) {
        this.title = title;
        this.price = price;
        this.r = 0;
    }

    makeReservation (r) {
        this.r += r;
    }
}

class Bekleidung extends Produkt {
    constructor(title, price, size) {
        super(title, price);

        this.size = size;
    }
    passtDas (s) {
        console.log(this.title);
        return this.size === s;
    }
}

let b = new Bekleidung('Hemd', 40, 'L');
console.log(b.passtDas('M'));

console.log(b);
b.makeReservation(5);
b.makeReservation(2);
console.log(b.r);