const { readFileSync }  = require('fs');

const itemLists = readFileSync('daythree.txt', { encoding: 'utf-8' }) 
  .replace(/\r/g, "")
  .trim() 
  .split("\n");
    
function part1() {

  let prioritySum = 0;
  
  const lowerAlphaAscii = 'a'.charCodeAt(0) - 1;
  const upperAlphaAscii = 'A'.charCodeAt(0) - 27;
  
  for (const itemList of itemLists) {
    const halfLength = itemList.length / 2,
      firstCompartment = itemList.slice(0, halfLength),
      secondCompartment = itemList.slice(-halfLength);
  
    for (let i = 0; i < firstCompartment.length; i++) {
      const item = firstCompartment[i];
  
      if (secondCompartment.includes(item)) {
        const asciiValue = item.charCodeAt(0);
  
        prioritySum +=
          asciiValue -
          (asciiValue < lowerAlphaAscii ? upperAlphaAscii : lowerAlphaAscii);
        break;
      }
    }
  }
  
  console.log(prioritySum);
}


function part2() {

let prioritySum = 0;

const lowerAlphaAscii = 'a'.charCodeAt(0) - 1;
const upperAlphaAscii = 'A'.charCodeAt(0) - 27;

for (let i = 0, group = []; i < itemLists.length; i++) {
  group.push(itemLists[i]);

  if (group.length !== 3) continue;

  for (let j = 0, count = 1; j < 3; j++) {
    const itemList = group[j];

    for (let m = 0; m < itemList.length; m++) {
      const item = itemList[m];

      for (let n = 0; n < 3; n++) {
        if (n === j) continue;
        if (!group[n].includes(item)) break;

        count++;
      }

      if (count === 3) {
        const asciiValue = item.charCodeAt(0);

        prioritySum +=
          asciiValue -
          (asciiValue < lowerAlphaAscii ? upperAlphaAscii : lowerAlphaAscii);
        break;
      }

      count = 1;
    }

    if (count === 3) break;
  }

  group = [];
}

console.log(prioritySum);
}

part1()
part2()