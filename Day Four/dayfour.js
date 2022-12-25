const { readFileSync }  = require('fs');

const pairs = readFileSync('dayfour.txt', { encoding: 'utf-8' })
.split(/\r?\n/);

const part1 = () => {

let fullyContainedPairs = 0;

for (const pair of pairs) {
  if (pair === '') break;

  const [section1, section2] = pair
    .split(',')
    .map((section) => section.split('-').map((range) => parseInt(range)));

  if (
    (section1[0] >= section2[0] && section1[1] <= section2[1]) ||
    (section2[0] >= section1[0] && section2[1] <= section1[1])
  )
    fullyContainedPairs++;
}

console.log(fullyContainedPairs);

}

const part2 = () => {

let overlappingPairs = 0;

for (const pair of pairs) {
  if (pair === '') break;

  const [section1, section2] = pair
    .split(',')
    .map((section) => section.split('-').map((range) => parseInt(range)));

  if (
    (section1[0] <= section2[0] && section1[1] >= section2[0]) ||
    (section2[0] <= section1[0] && section2[1] >= section1[0])
  )
    overlappingPairs++;
}

console.log(overlappingPairs);
}

part1();
part2();