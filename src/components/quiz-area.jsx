import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import TitleCard from "./quiz-title";
import QuizCard from "./quiz-card";
import { startQuiz } from "../scripts/quiz";
const data = require("../data/trivia-cards.json");

class QuizArea extends Component {
  state = {
    answers: [],
    status: -1,
    questions: []
  };
  handleStart = () => {
    const questions = startQuiz(data);
    const status = 0;
    this.setState({ questions, status });
  };
  // componentDidMount() {
  //   const questions = startQuiz(data);
  //   console.log(questions);
  // }

  render() {
    return (
      <section className="quiz-section">
        <div className="main-area">
          <Switch>
            <Route path="/quizcard" component={QuizCard} />
            <Route path="/" component={TitleCard} />
          </Switch>
        </div>
      </section>
    );
  }
}

export default QuizArea;
