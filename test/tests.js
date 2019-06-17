/* Needs several functions to facilitate the quiz application. 
    - startQuiz function
        - take in parameter of object and status
        -generates a random set Array of 5 objects
        -quiz status == inProgress

    - advanceQuiz
        -pushes answer boolean to array
        -if the answers array in state length is call the show score method 

    -show score
        -display percentage score 

    - finishQuiz
        clear all state and send back to start screen. 
*/

const expect = require("chai").expect;
const quiz = require("../src/scripts/quiz");
const data = require("../src/data/trivia-cards.json");

describe("Start Quiz Function", function() {
  it("Generates a random Array of 5 objects", function() {
    let status = "";
    let triviaCards = data;
    var result = quiz.startQuiz(triviaCards, status);
    expect(result.length).equal(5);
  });
});

describe("Advance Quiz Function", function() {
  it("Pushes Answer to array", function() {
    let answer = ["hold", true];
    let answers = [true, false, true];
    quiz.advanceQuiz(answer, answers);
    expect(answers).equal([true, false, true, true]);
  });
  it("Expect showScore to be called if array length is up to 5", function() {
    let answer = ["hold", true];
    let answers = [true, false, true, true];
    let result = quiz.advanceQuiz(answer, answers);
    expect(answers).equal([true, false, true, true, true]);
    expect(result).equal(showScore(answers));
  });
});
