import React, {Component} from "react";
import Zoom from 'react-reveal/Zoom';
import Arrow from '../../../images/arrow.svg';
import scrollToComponent from 'react-scroll-to-component';

class Question extends Component {
  state = {
    answerClasses: [],
    questionFeedback: false,
    clicked: false,
    bubble: true,
    quizCompleted: false,
    score: 0
  };

  scrollToElement = () => {
    if (this.state.quizCompleted) {
      scrollToComponent(this.Result, {
        offset: 0,
        align: 'middle',
        duration: 300,
        ease: 'inCirc'
      });
    }
    if (!this.state.quizCompleted) {
      scrollToComponent(this.NewQuiz, {
        offset: 0,
        align: 'middle',
        duration: 300,
        ease: 'inCirc'
      });
    }
  }

  handleVoting(answer, index) {
    if (!this.state.clicked) {
      setTimeout(() => {
        this.setState({bubble: false});
      }, 1500)
      this.setState({clicked: true});
      if (answer === this.props.questions[this.props.questionIndex].answer) {
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
        this.setState({answerClasses: newAnswerClasses, questionFeedback: 'FEL'});
      }
      setTimeout(() => {
        this.props.handler()
        this.setState({answerClasses: [], questionFeedback: false, clicked: false, bubble: true});
        if (!this.props.question) {
          this.setState({quizCompleted: true});
          this.props.quizCompleted();
          this.scrollToElement();
        }

      }, 2000)
    }
  }

  restartQuiz() {
    this.setState({quizCompleted: false, score: 0});
    setTimeout(() => {
      this.props.restarter();
      this.scrollToElement();
    }, 500)
  }

  render() {
    var politicians = [];

    if (this.props.politicians) {
      for (var i = 0; i < this.props.politicians.length; i++) {
        politicians.push(<div key={i} className={'politician-icon ' + this.state.answerClasses[i] + (
            this.state.clicked
            ? ' not-pulsing'
            : ' pulsing')}>
          <img key={i} onClick={this.handleVoting.bind(this, this.props.politicians[i].value, i)} src={this.props.politicians[i].image} alt={this.props.politicians[i].slug}/>
        </div>);
      }
      if (this.state.questionFeedback) {
        politicians.splice(1, 0, <p key="feedback" className={'question-feedback ' + this.state.questionFeedback}>{this.state.questionFeedback}!</p>);
      }
    }

    var progress = {
      width: this.props.questionIndex + 1 + '0%'
    };
    return (<div>
      {
        this.props.question && <div ref={(section) => {
              this.NewQuiz = section;
            }} className="quiz-container">

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
            <p className="quiz-questions-info">Fråga  {this.props.questionIndex + 1} av {this.props.questions.length}</p>
          </div>
      }
      {
        this.state.quizCompleted && <div>
            <div ref={(section) => {
                this.Result = section;
              }} className="quiz-container completed">
              <h3 className="result-text">Du fick {this.state.score} rätt av {this.props.questions.length}!</h3>
              <div className="play-again-button" onClick={this.restartQuiz.bind(this)}>
                <h5>Gör quizet igen</h5>
              </div>
            </div>
            <div className="answer-list">
              <h4>Visa rätt svar</h4><img src={Arrow} alt="dropdown-arrow"/>
            </div>
          </div>
      }

    </div>);
  }
}

export default Question;
