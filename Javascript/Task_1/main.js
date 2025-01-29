const numbers = [5, 2, 9, 1, 7, 3];
let maxx = Number.MIN_SAFE_INTEGER;
let minn = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < numbers.length; i++) {
  maxx = Math.max(maxx, numbers[i]);
  minn = Math.min(minn, numbers[i]);
}
console.log(`Largest number : ${maxx}
Smallest number : ${minn} `);
