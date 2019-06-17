import React from "react";
import logo from "./logo.svg";
import QuizArea from "./components/quiz-area";
import Navbar from "./components/nav-bar";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <QuizArea />
    </React.Fragment>
  );
}

export default App;
