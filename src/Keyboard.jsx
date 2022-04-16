import React, { Component } from "react";
import "./Keyboard.css";
import level from "./Level";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Slide from "@mui/material/Slide";

export default class Keyboard extends Component {
  static defaultProps = {
    maxWrong: 3,
  };
  constructor(props) {
    super(props);
    this.state = {
      nWrong: 0,
      doneSoFar: 1,
      level: 0,
      guessed: new Set(),
    };
    this.handleGuess = this.handleGuess.bind(this);
    this.handleRestartGame = this.handleRestartGame.bind(this);
    this.handleNextQuestion = this.handleNextQuestion.bind(this);
  }

  guessedWord() {
    return this.props.ans.answers
      .split("")
      .map((ltr) => (this.state.guessed.has(ltr) ? ltr : "_"));
  }
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState((st) => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (this.props.ans.answers.includes(ltr) ? 0 : 1),
    }));
  }

  restart() {
    this.setState((oldState) => ({
      nWrong: 0,
      guessed: new Set(),
      doneSoFar: 0,
      level: 0,
    }));
  }
  handleRestartGame() {
    window.history.go(-1);
  }
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((k) => (
      <button
        value={k}
        key={k}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(k)}
      >
        {k}
      </button>
    ));
  }
  handleOpen() {
    const level = this.state.doneSoFar / 3;
    let res = false;
    if ((level >= 1 && level <= 2) || (level >= 2 && level <= 3)) {
      res = true;
      return res;
    }
    setTimeout(function () {
      res = false;
      return res;
    }, 3000);
  }
  handleNextQuestion() {
    this.props.check();
    this.setState((curState) => ({
      doneSoFar: curState.doneSoFar + 1,
      guessed: new Set(),
    }));
    this.props.destroy(this.state.doneSoFar);
  }
  TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
  }
  render() {
    const gameOver = this.state.nWrong >= this.props.maxWrong ? 1 : 0;
    const gameWon =
      this.guessedWord().join("") === this.props.ans.answers ? 1 : 0;
    return (
      <div className="Hangman">
        <div className="level">{level(this.state.doneSoFar / 3)}</div>
        {!gameOver ? (
          <p className="Hangman-word">{this.guessedWord()}</p>
        ) : (
          <h2>{`Word Was : ${this.props.ans.answers}`}</h2>
        )}
        <p className="Hangman-btns">
          {!gameOver && !gameWon ? (
            this.generateButtons()
          ) : (
            <button
              id="btn"
              onClick={
                gameWon ? this.handleNextQuestion : this.handleRestartGame
              }
            >
              {gameWon ? <ArrowForwardIosIcon /> : <RestartAltIcon />}
            </button>
          )}
        </p>
      </div>
    );
  }
}
