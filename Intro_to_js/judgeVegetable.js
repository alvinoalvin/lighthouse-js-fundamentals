function judgeVegetable(vegetables, metric) {
  let max = {};
  max[metric] = 0;

  console.log(max)
  for (const vegi of vegetables) {
    if (vegi[metric] > max[metric]) {
      max = vegi
    }
  }

  return max.submitter;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'plumpness'

console.log(judgeVegetable(vegetables, metric))
