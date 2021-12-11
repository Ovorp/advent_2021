var fs = require('fs');

try {
  var data = fs.readFileSync('input.txt', 'utf8');
} catch (e) {
  console.log('Error:', e.stack);
}

data = data.split(/\r?\n/).map((val) => {
  let result = val.split(' ');
  let direction = result[0];
  let distance = +result[1];
  return { direction, distance };
});

let location = [0, 0];

data.forEach((val) => {
  if (val.direction === 'forward') {
    location[0] += val.distance;
  }
  if (val.direction === 'down') {
    location[1] += val.distance;
  }
  if (val.direction === 'up') {
    location[1] -= val.distance;
  }
});

console.log(location[0] * location[1]);
