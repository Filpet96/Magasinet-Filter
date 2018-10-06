import React, {Component} from "react";
import {Router, Link} from "@reach/router";
import Helmet from "react-helmet";
import Zoom from 'react-reveal/Zoom';

import "./index";

class Question extends Component {
  state = {
    answerClasses: [],
    questionFeedback: false,
    clicked: false,
    bubble: true,
    score: 0
  };

  handleVoting(answer, index) {
    if (!this.state.clicked) {
      setTimeout(() => {
        this.setState({ bubble: false });
      }, 2500)
      this.setState({
        clicked: true
      });
    if (answer == this.props.questions[this.props.questionIndex].answer) {
      let newAnswerClasses = this.state.answerClasses;
      newAnswerClasses[index] = 'green';
      this.setState({
        answerClasses: newAnswerClasses,
        questionFeedback: 'RÄTT',
        score: this.state.score + 1
      });
    } else {
      let newAnswerClasses = this.state.answerClasses;
      newAnswerClasses[index] = 'red';
      this.setState({
          answerClasses: newAnswerClasses,
          questionFeedback: 'FEL'
      });
    }
    setTimeout(() => {
      this.props.handler()
      this.setState({
        answerClasses: [],
        questionFeedback: false,
        clicked: false,
        bubble: true
      });
    }, 3000)
  }
  }

  restartQuiz() {
    this.setState({
      score: 0
    });
    this.props.restarter()
  }

  render() {

    var politicians = [];

    if (this.props.politicians) {
      for (var i = 0; i < this.props.politicians.length; i++) {
        politicians.push(<div className={'politician-icon ' + this.state.answerClasses[i] + (this.state.clicked ? ' not-pulsing' : ' pulsing')}><img onClick={this.handleVoting.bind(this, this.props.politicians[i].value, i)} src={this.props.politicians[i].image}/></div>);
      }
      if (this.state.questionFeedback) {
        politicians.splice(1, 0, <p className={'question-feedback ' + this.state.questionFeedback}>{this.state.questionFeedback}!</p>);
      }
    }

    var progress = {
      width:  this.props.questionIndex + '0%'
    };
    return (<div>
      {
        this.props.question &&
        <div className="quiz-container">

            <Zoom when={this.state.bubble}>
            <div className="quiz-bubble">
              <p>
                {this.props.question.question}
              </p>
              <div className="bubble-triangle"></div>
            </div>
            </Zoom>
            <div className="politician-icon-container">
              {politicians}
            </div>
            <div className="quiz-progress-bar">
              <div className="quiz-progress-percent" style={progress}></div>
            </div>
            <p className="quiz-questions-info">Fråga {this.props.questionIndex + 1} av {this.props.questions.length}</p>
          </div>
      }
      {
        !this.props.question && <div className="quiz-container">
            <h2 className="result-text">Du fick {this.state.score} rätt av {this.props.questions.length}!</h2>
            <div className="play-again-button" onClick={this.restartQuiz.bind(this)}>Gör quizet igen</div>
          </div>
      }

    </div>);
  }
}

export default Question;
