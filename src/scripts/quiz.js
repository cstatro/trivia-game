//console.log(Object.values(data[1]));

function startQuiz(data) {
  let collect = [];
  let uniqueNumbers = [];
  while (uniqueNumbers.length < 5) {
    let num = Math.round(Math.random() * 9);
    collect.push(num);
    uniqueNumbers = [...new Set(collect)];
  }
  let returnArray = [];
  try {
    for (var i = 0; i < uniqueNumbers.length; i++) {
      let value = Object.values(data[uniqueNumbers[i]]);
      returnArray.push(value);
    }
    return returnArray;
  } catch (error) {
    console.log(uniqueNumbers);
    console.log(error);
  }
}

module.exports = {
  startQuiz: startQuiz
};
