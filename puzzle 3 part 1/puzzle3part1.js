var fs = require('fs');

try {
  var data = fs.readFileSync('input.txt', 'utf8');
} catch (e) {
  console.log('Error:', e.stack);
}
data = data.split(/\r?\n/);

let gamma = [];
let epsilon = [];

for (let i = 0; i < 12; i++) {
  let zero = 0;
  let one = 0;

  data.forEach((val) => {
    if (val[i] === '1') {
      one++;
    } else {
      zero++;
    }
  });
  if (zero > one) {
    gamma.push('0');
    epsilon.push('1');
  } else {
    gamma.push('1');
    epsilon.push('0');
  }

  // add test to make sure zero and one reset if (zero + one > 1000) console.log('error zero and one not reset')
  // zero = 0
  // one = 0
}

gamma = parseInt(gamma.join(''), 2);
epsilon = parseInt(epsilon.join(''), 2);
console.log(gamma * epsilon);
