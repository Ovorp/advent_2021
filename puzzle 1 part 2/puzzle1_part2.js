var fs = require('fs');

try {
  var data = fs.readFileSync('input2.txt', 'utf8');
} catch (e) {
  console.log('Error:', e.stack);
}

data = data.split(/\r?\n/).map((val) => +val);

// data = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

let dataSet = data
  .map((val, i) => {
    if (i === 0 || i === 1) return;
    return data[i] + data[i - 1] + data[i - 2];
  })
  .slice(2);

let increase = 0;

dataSet.forEach((val, i) => {
  if (i === 0) return;
  if (val > dataSet[i - 1]) {
    return increase++;
  }
});

console.log(increase);
