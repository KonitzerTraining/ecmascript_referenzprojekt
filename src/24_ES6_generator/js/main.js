// Klassische Funktion
function f1 ()  {
    return 1;
}
let erg = f1();
console.log(erg);

// Generator-Funktion
function* f2 () {
  //  return 5;
    let i = 0;
    while (i < 4) {
        i++;
        yield i;
    }
}

let ergF2 = f2();
console.log(ergF2.next());
console.log(ergF2.next());
console.log(ergF2.next());
console.log(ergF2.next());
console.log(ergF2.next());
console.log(ergF2.next());

