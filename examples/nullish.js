//Nullish coolescing operator
//? used for default value

//if the value is null will return value on the left side else will return value on right side
console.info(null ?? "default value");

console.info(0 ?? "definedValue");
console.info("" ?? "definedValue");
console.info([] ?? "definedValue");
console.info({} ?? "definedValue");
console.info(NaN ?? "definedValue");
