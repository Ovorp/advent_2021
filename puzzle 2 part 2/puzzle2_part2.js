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

// let data = [
//   'forward 5',
//   'down 5',
//   'forward 8',
//   'up 3',
//   'down 8',
//   'forward 2',
// ].map((val) => {
//   let result = val.split(' ');
//   let direction = result[0];
//   let distance = +result[1];
//   return { direction, distance };
// });

let location = [0, 0, 0];

data.forEach((val) => {
  if (val.direction === 'forward') {
    location[0] += val.distance;
    location[1] += val.distance * location[2];
  }
  if (val.direction === 'down') {
    // location[1] += val.distance;
    location[2] += val.distance;
  }
  if (val.direction === 'up') {
    // location[1] -= val.distance;
    location[2] -= val.distance;
  }
  console.log(location);
});

console.log(location[0] * location[1]);
console.log(location);
