const maxInteger = Number.MAX_SAFE_INTEGER;
console.info(maxInteger); //9087199254740991
console.info(maxInteger + 1);
console.info(maxInteger + 2);

const maxIntegerBigInt = BigInt(maxInteger);
//must use the n at the end to signifify using big int
console.info(maxIntegerBigInt);
console.info(maxIntegerBigInt + 1n);
console.info(maxIntegerBigInt + 2n);

console.info(maxIntegerBigInt * 2000n);
