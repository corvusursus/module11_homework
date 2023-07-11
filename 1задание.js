function getevenodd(arr) {
  let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
    if (arr[i] === 0) {
      zeroCount++;
    } else if (arr[i] % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }
}

console.log(`Четных элементов: ${evenCount}`);
console.log(`Нечетных элементов: ${oddCount}`);
console.log(`Нулевых элементов: ${zeroCount}`); 
}

getevenodd([1, 2, 3, 4, 5, 0, null, "hello"]);