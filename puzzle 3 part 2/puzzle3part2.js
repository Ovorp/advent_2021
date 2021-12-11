var fs = require('fs');

try {
  var data = fs.readFileSync('input.txt', 'utf8');
} catch (e) {
  console.log('Error:', e.stack);
}
data = data.split(/\r?\n/);

// data = [
//   '00100',
//   '11110',
//   '10110',
//   '10111',
//   '10101',
//   '01111',
//   '00111',
//   '11100',
//   '10000',
//   '11001',
//   '00010',
//   '01010',
// ];

let strLength = data[0].length;

function commonNumbers(arr, position) {
  let zero = 0;
  let one = 0;

  arr.forEach((val) => {
    if (val[position] === '1') {
      one++;
    } else {
      zero++;
    }
  });

  let most = zero > one ? '0' : '1';
  let least = zero <= one ? '0' : '1';
  return { most, least };
}

function lastNumber(arr, value) {
  let answer = [...arr];
  for (let i = 0; i < strLength; i++) {
    let commonDigit = commonNumbers(answer, i)[value];

    answer = answer.filter((val) => {
      if (val[i] === commonDigit) {
        return val;
      }
    });
    if (answer.length === 1) break;
  }

  return answer;
}

function oxy(data) {
  return lastNumber(data, 'most');
}

function co2(data) {
  return lastNumber(data, 'least');
}

let oxyDigit = parseInt(oxy(data), 2);
let co2Digit = parseInt(co2(data), 2);

console.log(oxyDigit * co2Digit);
