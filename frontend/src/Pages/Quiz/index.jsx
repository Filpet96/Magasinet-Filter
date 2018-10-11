import React, {Component} from "react";
import endPoint from "../../Data/api";
import Helmet from "react-helmet";
import Header from "../../Components/Header";
import TrialPopup from "../../Components/TrialPopup";
import ShareArticle from "../../Components/ShareArticle";
import ArticlePreviewSlider from "../../Components/ArticlePreviewSlider";
import Question from "./Question";
import "./index";


class Quiz extends Component {
  state = {
    quiz: false,
    politicians: false,
    quizQuestions: false,
    question: 6,
    error: false,
    quizCompleted: false,
    answer: 0
  };

  constructor(props) {
  super(props)
  this.questionHandler = this.questionHandler.bind(this)
  this.restartHandler = this.restartHandler.bind(this)
  this.completedHandler = this.completedHandler.bind(this)
  }

  componentDidMount() {

    fetch(`${endPoint}/quiz/179/`).then(response => response.json()).catch(error => {
      this.setState({error});
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
       return {question: 0, quizCompleted: false}
    })
  }
  completedHandler() {
    this.setState(prevState => {
      return {quizCompleted: true}
    })
  }



  render() {
    return (<div>
      <Header/>
      <Helmet>
        <title>Filter - start</title>
      </Helmet>
      <TrialPopup/>
      <div className="quizContainer">
        <span>Filterbubblan</span>
        <span className="published">PUBLICERAD FREDAG 07 SEPTEMBER 2018</span>
        <h1>{this.state.quiz.post_title}</h1>
        <img src={this.state.quiz.featured_image} className="featured_image" alt="quiz-featured"/>
        <p className="quiz-content" dangerouslySetInnerHTML={{
            __html: this.state.quiz.quiz_content_text
          }}/>
        <div className="bill-bull-quiz">
          <h2 className="uppercase bold quiz_header_text">{this.state.quiz.quiz_header_text}</h2>
          <p className="quiz_sub_header center">{this.state.quiz.quiz_sub_header_content}</p>
              <Question
                questions={this.state.quizQuestions}
                politicians={this.state.quiz.politicians}
                question={this.state.quizQuestions[this.state.question]}
                questionIndex={this.state.question}
                answer={this.state.answer}
                handler={this.questionHandler}
                restarter={this.restartHandler}
                quizCompleted={this.completedHandler}
                />
        </div>
        <ShareArticle/>
        <ArticlePreviewSlider tag='filterbubblan' headerText='Mer från filterbubblan' />
          {
            this.state.quizCompleted &&
            <ArticlePreviewSlider tag='tunga-granskningar' headerText='Mer från magasinet' darkMode={true}/>
          }
      </div>
    </div>);
  }
}

export default Quiz;
