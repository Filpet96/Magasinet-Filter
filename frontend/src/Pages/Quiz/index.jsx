import React, {Component} from "react";
import endPoint from "../../Data/api";
import {Router, Link} from "@reach/router";
import Helmet from "react-helmet";
import Header from "../../Components/Header";
import TrialPopup from "../../Components/TrialPopup";
import Question from "./Question";
import "./index";


class Quiz extends Component {
  state = {
    quiz: false,
    politicians: false,
    quizQuestions: false,
    question: 8,
    error: false,
    answer: 0
  };

  constructor(props) {
  super(props)
  this.questionHandler = this.questionHandler.bind(this)
  this.restartHandler = this.restartHandler.bind(this)
  }

  componentDidMount() {

    fetch(`${endPoint}/quiz/179/`).then(response => response.json()).catch(error => {
      this.setState({error});
      console.log(error);
    }).then(data => {
      this.setState({quiz: data});
      this.setState({quizQuestions: Object.values(data.questions)});
    });

    fetch(`${endPoint}/quiz/politicians/`).then(response => response.json()).catch(error => {
      this.setState({error});
    }).then(data => {
      this.setState({politicians: data});
    });
  }

  questionHandler() {

    this.setState(prevState => {
       return {question: prevState.question + 1}
    });

  }

  restartHandler() {
    this.setState(prevState => {
       return {question: 0}
    });
  }



  render() {

    const {quiz, politicians, quizQuestion, error} = this.state;

    return (<div>
      <Header/>
      <Helmet>
        <title>Filter - start</title>
      </Helmet>
      <TrialPopup/>
      <div className="quizContainer">
        <p className="text-salmon">Filterbubblan</p>
        <p className="text-dark-salmon">PUBLICERAD FREDAG 07 SEPTEMBER 2018</p>
        <h1>{quiz.post_title}</h1>
        <img onClick={this.questionHandler.bind()} src={quiz.featured_image} className="featured_image" alt="Quiz Featured Image"/>
        <p dangerouslySetInnerHTML={{
            __html: quiz.quiz_content_text
          }}/>
        <div className="bill-bull-quiz">
          <h1 className="uppercase bold">{quiz.quiz_header_text}</h1>
          <h3 className="quiz_sub_header">{quiz.quiz_sub_header_content}</h3>
              <Question
                questions={this.state.quizQuestions}
                politicians={this.state.quiz.politicians}
                question={this.state.quizQuestions[this.state.question]}
                questionIndex={this.state.question}
                answer={this.state.answer}
                handler={this.questionHandler}
                restarter={this.restartHandler}
                />
        </div>
      </div>
    </div>);
  }
}

export default Quiz;
