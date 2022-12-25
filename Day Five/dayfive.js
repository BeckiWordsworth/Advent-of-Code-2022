const { readFileSync }  = require('fs');

const [stacksInput, procedureInput] = readFileSync('dayfive.txt', { encoding: 'utf-8' }).toString().split('\n\n');

let stacks = stacksInput
  .split('\n')
  .map((r) =>
    r
      .replace(/\[/g, '')
      .replace(/\]/g, '')
      .replace(/    /g, '.')
      .replace(/\s/g, '')
  )
stacks.pop()
stacks.reverse()
stacks = stacks.map((s) => s.split(''))
let crates = Array.apply(null, Array(stacks[0].length)).map(() =>
  Array.apply(null, Array(stacks.length)).map(() => [])
)

for (let i = 0; i < stacks[0].length; i++) {
  for (let j = 0; j < stacks.length; j++) {
    const e = stacks[j][i]
    crates[i][j] = e
  }
}
crates = crates.map((c) => c.filter((d) => d !== '.'))

const procedure = procedureInput
  .split('\n')
  .map((r) =>
    r.replace('move ', '').replace(' from', '').replace(' to', '').split(' ')
  )
  .map((s) => ({
    move: parseInt(s[0]),
    from: parseInt(s[1] - 1),
    to: parseInt(s[2] - 1),
  }))
  .filter((i) => i)

const rearrange = (originalCrates, arrangeFunction) => {
  const crates = [...originalCrates].map((r) => [...r])
  arrangeFunction(crates)
  return crates.map((r) => r.reverse()[0]).join('')
}

const part1 = (crates) => {
  procedure.forEach((p) => {
    for (let i = 0; i < p.move; i++) {
      const crate = crates[p.from].pop()
      crates[p.to].push(crate)
    }
  })
}

const part2 = (crates) => {
  procedure.forEach((p) => {
    const stack = []
    for (let i = 0; i < p.move; i++) {
      const crate = crates[p.from].pop()
      stack.unshift(crate)
    }
    crates[p.to].push(stack)
    crates[p.to] = crates[p.to].flat()
  })
}

console.log(rearrange(crates, part1))
console.log(rearrange(crates, part2))