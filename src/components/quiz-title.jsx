import React, { Component } from "react";
import { Link } from "react-router-dom";

class TitleCard extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="title-box">
          <h2>Oscar Fever Trivia</h2>
        </div>
        <button className="start-button">
          <Link to={"/quizcard"}>START</Link>
        </button>
      </div>
    );
  }
}

export default TitleCard;
