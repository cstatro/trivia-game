import React, { Component } from "react";
import { startQuiz } from "../scripts/quiz";
import { history } from "react-router-dom";
const data = require("../data/trivia-cards.json");

class QuizCard extends Component {
  state = {
    questions: [],
    answers: [],
    progress: -1
  };

  async componentDidMount() {
    console.log(data[9]);
    try {
      const questions = await startQuiz(data);
      const progress = 0;
      this.setState({ questions, progress });
    } catch (error) {
      alert(error);
      this.props.history.push("/");
    }
  }
  handleAdvance = index => {
    const progress = this.state.progress + 1;
    let answers = this.state.answers;
    answers.push(this.state.questions[this.state.progress][index][1]);
    this.setState({ progress });
  };

  render() {
    const { progress, questions } = this.state;
    if (progress === -1) return <p>quiz failed</p>;

    return (
      <div className="question-card">
        <div className="wrap-question">
          <h1 className="question">{questions[progress][0]}</h1>
        </div>
        <div className="wrap-answers">
          <div onClick={() => this.handleAdvance(1)} className="answer">
            {questions[progress][1]}
          </div>
          <div onClick={() => this.handleAdvance(2)} className="answer">
            {questions[progress][2]}
          </div>
          <div onClick={() => this.handleAdvance(3)} className="answer">
            {questions[progress][3]}
          </div>
          <div onClick={() => this.handleAdvance(4)} className="answer">
            {questions[progress][4]}
          </div>
        </div>
      </div>
    );
  }
}

export default QuizCard;
