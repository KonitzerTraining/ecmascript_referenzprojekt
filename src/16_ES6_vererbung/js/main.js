class Produkt {
    constructor(title, price) {
        this.title = title;
        this.price = price;
        this.r = 0;
    }

    /**
     * Accepts Numbers
     * @param r: number
     */
    makeReservation (r) {
        this.r += r;
    }
}

class Bekleidung extends Produkt {
    constructor(title, price, size) {
        super(title, price); // Produkt.call(this, title, price);

        this.size = size;
    }
    passtDas (s) {
        console.log(this.title);
        return this.size === s;
    }
}

console.dir(Produkt);
console.dir(Bekleidung);

let b = new Bekleidung('Hemd', 40, 'L');
console.log(b.passtDas('M'));

console.log(b);
b.makeReservation(5);
b.makeReservation(2);
console.log(b.r);

/*
*           Object.prototype
*       Produkt.prototype
*   Bekleidung.prototype
* b
* */