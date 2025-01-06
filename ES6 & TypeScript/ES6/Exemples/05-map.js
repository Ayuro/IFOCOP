var maMap = new Map();
maMap.set("truc", "toto");

maMap.get("truc");  // Renvoie "toto".
maMap.get("machin");// Renvoie undefined.


maMap.clear();

const mapArray = new Map([['key', 'value'], ['key2', 'value2'], ['key3', 'value3']]);

console.log(mapArray.get('key'), mapArray.get('key2'));
console.log('mapArray.values(): ', mapArray.values());