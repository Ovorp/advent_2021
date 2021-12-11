var fs = require('fs');

try {
  var data = fs.readFileSync('puzzle1.txt', 'utf8');
} catch (e) {
  console.log('Error:', e.stack);
}

data = data.split(/\r?\n/).map((val) => +val);

// let data = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

let increase = 0;

data.forEach((val, i) => {
  if (i === 0) return;
  if (val > data[i - 1]) {
    return increase++;
  }
});

console.log(increase);
