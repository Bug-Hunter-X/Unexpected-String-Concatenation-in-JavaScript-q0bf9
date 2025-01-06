function foo(a, b) {
  // Type checking
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // or throw an error
  }
  return a + b;
}

console.log(foo(1, '1')); // Output: NaN

//Alternative using Number() for type conversion
function foo2(a,b){
  return Number(a) + Number(b);
}
console.log(foo2(1,'1')) //Output: 2