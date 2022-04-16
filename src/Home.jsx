import React, { Component } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Popup from "./PopUp";
import { data } from "./Data";
import WithRoutes from "./WithRoutes";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      total: data.length,
      showButton: false,
      questionAnswered: false,
      score: 0,
      displayPopup: "flex",
    };

    this.handleStartQuiz = this.handleStartQuiz.bind(this);
  }
  handleStartQuiz() {
    this.props.router.navigate(`/quiz`);
  }

  render() {
    return (
      <div className="home-page">
        <div className="container">
          <Popup
            style={{ display: this.state.displayPopup }}
            score={this.state.score}
            total={this.state.total}
            startQuiz={this.handleStartQuiz}
          />
        </div>
      </div>
    );
  }
}

export default WithRoutes(Home);
