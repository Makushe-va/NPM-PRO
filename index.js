//1. We output numbers from 20 to 30. we use a step of 0.5.
let output = '';
for (let i = 20; i <= 30; i += 0.5) {
  output += i + (i < 30 ? ' ' : '');
}
console.log(output);
