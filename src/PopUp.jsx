import React, { Component } from "react";
import MyButton from "./MyButton";
import Fade from "react-reveal/Fade";
// import { useNavigate } from "react-router-dom";
import "./PopUp.css";

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "start",
      title: "Welcome to the Programming Quiz!",
      text: "This Quiz has 3 levels. Each Level contains 3 questions each. If you fail at any level you start again! GoodLuck 👍 <br /><br />",
      buttonText: "Start the quiz",
    };

    this.popupHandle = this.popupHandle.bind(this);
  }

  popupHandle() {
    let time = this.state.time;
    this.props.startQuiz();

    if (time === "start") {
      this.setState({
        time: "end",
        title: "Congratulations!",
        buttonText: "Restart",
      });
      this.props.startQuiz();
      //alert("START THE QUIZ");
    } else {
      // alert("FINISHED QUIZ");
      // eslint-disable-next-line no-restricted-globals
      location.reload(); // restart the application
    }
  }

  createMarkup(text) {
    return { __html: text };
  }

  render() {
    let { title, text, buttonText } = this.state;

    let { style } = this.props;

    return (
      <Fade delay={500}>
        <div className="popup-container" style={style}>
          <div className="container">
            <div className="ml-5 col-md-10 col-10">
              <div className="popup">
                <h1>{title}</h1>
                <p dangerouslySetInnerHTML={this.createMarkup(text)} />
                <span onClick={this.popupHandle}>
                  <MyButton text={buttonText} bck="#FF9800" color="#fff" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

export default Popup;
