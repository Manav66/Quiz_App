import React, { Component } from "react";
import Quiz from "./Quiz";
import Keyboard from "./Keyboard";
import PickRandomQuestion from "./Data";
import WithRoutes from "./WithRoutes";
import MyButton from "./MyButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Combine.css";
class Combine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ques: PickRandomQuestion(),
      exist: true,
    };
    this.check = this.check.bind(this);
    this.destroy = this.destroy.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  destroy(val) {
    this.setState({
      exist: val + 1 > 9 ? false : true,
    });
    // console.log(val);
  }
  check() {
    this.setState({ ques: PickRandomQuestion() });
  }
  handleClick() {
    window.history.back();
  }
  render() {
    return (
      <div className="quiz">
        {this.state.exist ? (
          <Quiz
            question={this.state.ques}
            q={this.state.ques.question}
            a={this.state.ques.answers}
            click={this.check}
            destroy={this.destroy}
          />
        ) : (
          <div className="end-quiz">
            <h1>Congratulations! You passed the quiz...</h1>
            <button className="btn" onClick={this.handleClick}>
              ReTake!
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default WithRoutes(Combine);
