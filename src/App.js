// src/App.js
import React, { useEffect, useState } from 'react';
import { questions } from './data/questions';
import Recommendation from './components/Recommendation';
import Question from './components/Question';
import "./App.scss"

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [history, setHistory] = useState([]);
  const [slug, setSlug] = useState("")
  const [isRecommendation, setIsRecommendation] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalQuestions = countTotalQuestions(questions[0]);
    if (isRecommendation) {
      setProgress(100);
    } else {
      const remainingQuestions = countRemainingQuestions(currentQuestion);
      const completedQuestions = totalQuestions - remainingQuestions;
      setProgress((completedQuestions / totalQuestions) * 100);
    }
  }, [currentQuestion, history, isRecommendation]);

  const countTotalQuestions = (question) => {
    if (!question.options || question.options.length === 0) return 1;
    return 1 + question.options.reduce((sum, option) => sum + countTotalQuestions(option), 0);
  };

  const countRemainingQuestions = (question) => {
    if (!question.options || question.options.length === 0) return 0;
    return question.options.reduce((sum, option) => sum + countTotalQuestions(option), 0);
  };


  const questionProps = {
    currentQuestion,
    setCurrentQuestion,
    setSlug,
    history,
    setHistory,
    setIsRecommendation,
    progress,
    questions
  }

  const navigationProps = {
    history, 
    setHistory, 
    setCurrentQuestion, 
    questions, 
    setIsRecommendation,
    isRecommendation
  }

  return (
    <div className='app'>
      {isRecommendation ? 
        <Recommendation slug={slug}  navigationProps={navigationProps}/> :
        <Question {...questionProps} navigationProps={navigationProps} />  
      }
    </div>
  );
};

export default App;
