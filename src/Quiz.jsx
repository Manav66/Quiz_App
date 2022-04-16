import React, { Component } from "react";
import Keyboard from "./Keyboard";
import "./Quiz.css";
class Quiz extends Component {
  render() {
    const { q } = this.props;
    return (
      <div className="quiz-container">
        <div className="content">
          <h1>Quiz Section</h1>
          <h3 className="question">{q}</h3>
        </div>
        <Keyboard
          ans={this.props.question}
          check={this.props.click}
          destroy={this.props.destroy}
        />
      </div>
    );
  }
}
export default Quiz;
