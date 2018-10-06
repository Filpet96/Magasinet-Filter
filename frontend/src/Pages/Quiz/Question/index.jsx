import React, {Component} from "react";
import {Router, Link} from "@reach/router";
import Helmet from "react-helmet";

import "./index";

class Question extends Component {
  state = {
    answerClasses: [],
    questionFeedback: false,
  };


  handleVoting(answer, index) {
    if (answer == this.props.questions[this.props.questionIndex].answer) {
      let newAnswerClasses = this.state.answerClasses;

      newAnswerClasses[index] = 'green';
      this.setState({
        answerClasses: newAnswerClasses,
        questionFeedback: 'RÄTT'
      });
    } else {
      let newAnswerClasses = this.state.answerClasses;
      newAnswerClasses[index] = 'red';
      this.setState({
          answerClasses: newAnswerClasses,
          questionFeedback: 'FEL'
      });
    }
    this.props.handler()
  }

  render() {

    var politicians = [];

    if (this.props.politicians) {
      for (var i = 0; i < this.props.politicians.length; i++) {
        politicians.push(<div className={'politician-icon ' + this.state.answerClasses[i]}><img onClick={this.handleVoting.bind(this, this.props.politicians[i].value, i)} src={this.props.politicians[i].image}/></div>);
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
            <div className="quiz-bubble">
              <p>
                {this.props.question.question}
              </p>
              <div className="bubble-triangle"></div>
            </div>
            <div className="politician-icon-container">
              {politicians}
            </div>
            <div className="quiz-progress-bar">
              <div className="quiz-progress-percent" style={progress}></div>
            </div>
            <p className="quiz-questions-info">Fråga {this.props.questionIndex} av {this.props.questions.length}</p>
          </div>
      }
      {
        this.props.answer !== 0 && <p>
            {this.props.question.question}

            {this.props.question.answer}
          </p>
      }

    </div>);
  }
}

export default Question;
