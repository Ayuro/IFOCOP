const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

const obj = {
  d:1,
  e:2,
  f:3
};

for (const item in obj) {
  console.log('clef: ', item, 'valeur: ', obj[item]);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"
