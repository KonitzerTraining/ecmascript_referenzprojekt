//ES6 Collections
// Array, Map, Set
let map = new Map();

console.log(Map.prototype);

// map.set(key, value)
let o1 = {id: 3, title: 'Haus'};
map.set(o1, 2);
map.set({id: 4, title: 'Baum'}, 1);

let iterable = map.entries();
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());

function myOwnIterator({start = 0, end = 1, step = 1}) {
    let i = 0;
    return {
        next() {
            if (i < end) {
                i += step;
                return {
                    value: i,
                    done: false
                };
            }
            return {
                value: undefined,
                done: true
            };

        }
    }
}

const iterator = myOwnIterator({end : 5});

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());