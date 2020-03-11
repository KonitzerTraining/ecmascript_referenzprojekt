let a = 1;

function* gen () {
    yield 1;
    yield 2;
}
let i = gen();
i.next();
