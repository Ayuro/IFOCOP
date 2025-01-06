const set1 = new Set([1, 2, 3, 4, 5]);

console.log(set1.has(1));
// expected output: true

console.log(set1.has(5));
// expected output: true

console.log(set1.has(6));
// expected output: false

const arr = [1, 1, 2, 3, 4, 5, 5, 5, 8, 7];

const set = new Set(arr);

console.log('setArr: ', set);

const deduplicatedArr = Array.from(set);

console.log('deduplicatedArr: ', deduplicatedArr);
