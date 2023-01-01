const ScaleBalancing = (string) => {
  const [balanceString, weightsString] = string; // Destructuring assignment e.g ["x","y"]= ["[1,2]","[4,5,6]"];
  const balance = convertStringToArray(balanceString);
  const weights = convertStringToArray(weightsString);
  const weightsMap = createWeightsMap(weights);

  // one weight test
  // const passesOneWeightTest = balanceWithOneWeight(weightsMap, balance);

  // if (passesOneWeightTest) return passesOneWeightTest;
  // //one on each side of scale, or on one side of scale
  // return balanceWithTwoWeights(weightsMap, balance, weights);
};

//returns sorted array from string
const convertStringToArray = (string) => {
  return string
    .split(",")
    .map((el) => parseInt(el.match(/\d+/g)[0]))
    .sort((a, b) => a - b);
};

const createWeightsMap = (weights) => {
  const weightsMap = new Map();

  weights.forEach((weight, index) => {
    if (!weightsMap.get(weight)) weightsMap.set(weight, 0);
    weightsMap.set(weight, weightsMap.get(weight) + 1);
  });

  return weightsMap;

};


const balanceWithOneWeight = (weightsMap, balance) => {
const difference = balance[1] - balance[0];
return weightsMap.has(difference) && difference;
};

const balanceWithTwoWeights = (weightsMap, balance, weightsAvailable) => {
let answer = 'not possible';

for(let index = 0; index < weightsAvailable.length; index++) {
  const countOfWeight = weightsMap.get(weightsAvailable[index]);
  weightsMap.set(weightsAvailable[index], countOfWeight - 1);
  const difference = Math.abs(balance[1] - balance[0] + weightsAvailable[index]);

  //one weight on each side
  if (weightsMap.get(difference) > 0) {
    answer = weightsAvailable[index] > difference
      ? `${difference},${weightsAvailable[index]}`
      : `${weightsAvailable[index]},${difference}`;
    index = weightsAvailable.length;
  } else if ( //two weights on one side
    weightsAvailable[index] + weightsAvailable[index + 1] + balance[0] === balance[1]
  ) {
    answer = `${weightsAvailable[index]},${weightsAvailable[index + 1]}`;
    index = weightsAvailable.length;
  }
  weightsMap.set(weightsAvailable[index], countOfWeight + 1);
}
return answer;
};

// // keep this function call here
// console.log(ScaleBalancing(["[3, 7]", "[1, 2, 7]"]));
// console.log(ScaleBalancing(["[5, 9]", "[1, 2, 6, 7]"]));
// console.log(ScaleBalancing(["[13, 4]", "[1, 2, 3, 6, 14]"]));
// console.log(ScaleBalancing(["[3, 4]", "[1, 2, 7, 7]"]));
// console.log(ScaleBalancing(["[1, 5]", "[1, 11, 7, 5]"]));
