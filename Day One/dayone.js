const { readFileSync }  = require('fs');

const input = readFileSync('./dayone.txt', 'utf-8');

const calorieGroups = input.split(/(?:\r?\n){2}/);

const part1 = () => {

let mostCalories = 0;

for (const calorieGroup of calorieGroups) {
  const calories = calorieGroup
    .split(/\r?\n/)
    .reduce((total, calorie) => total + parseInt(calorie), 0);

  if (calories > mostCalories) mostCalories = calories;
}

console.log(mostCalories);
}

const part2 = () => {

const TopThreeCalorieCounting = calorieGroups
  .map((calories) =>
    calories
      .split(/\r?\n/)
      .reduce((total, calorie) => total + parseInt(calorie), 0)
  )
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((all, calorie) => all + calorie, 0);

console.log(TopThreeCalorieCounting);
}

part1()
part2()
