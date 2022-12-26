const { readFileSync }  = require('fs');

const input = readFileSync('daysix.txt', { encoding: 'utf-8' }).toString();

const differentCharacters = (number, string) => {
  for (let i = number; i < string.length; i++) {
    const charSet = new Set(string.substring(i - number, i).split(''))
    if (charSet.size === number) {
      return i
    }
  }
}

console.log(
  `Part 1: ${differentCharacters(4, input)}`
)
console.log(
  `Part 2: ${differentCharacters(14, input)}`
)