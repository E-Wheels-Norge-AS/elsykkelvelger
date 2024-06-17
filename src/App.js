import React from 'react'
import { useEffect, useState } from 'react'
import Question from './components/Question'
import Recommendation from './components/Recommendation'
import { questions } from './data/questions'
import "./global.scss"
import ProgressBar from './components/ProgressBar'

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [totalQuestions, setTotalQuestions] = useState(10)
  const [bike, setBike] = useState(null);
  
  useEffect(()=>{
    const question = questions.find(q => q.id === 1)
    setCurrentQuestion(question)
  }, [])

  const resetApp = () => {
    const question = questions.find(q => q.id === 1)
    setCurrentQuestion(question)
    setBike(null)
  }

  const previousQuestion = () => {
    console.log(currentQuestion);
  }

  return (
    <div className='main'>
      {currentQuestion ? (   
        <>
        <h1>Elsykkelvelgeren</h1>
        <h2>Svar på spørsmålene under, så finner vi den perfekte sykkelen for deg!</h2>
        <ProgressBar />
        <div className='navigationButtons'>
          <button onClick={previousQuestion}>Forrige spørsmål</button>
          <button onClick={resetApp}>Start på nytt</button>
        </div>
        </> ) : 
        <>
        <h1>Vi tror du kommer til å digg denne!</h1>
        <h2>Basert på dine svar, mener vi denne sykkelen kan være et godt alternativ for deg</h2>
        <div className='navigationButtons'>
          <button onClick={resetApp}>Start på nytt</button>
        </div>
        </>
      }
      <div className='outputContainer'>
      {currentQuestion ?       
        <Question
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}  
        setBike={setBike}
        /> 
        : 
        <>
          <Recommendation 
            bike={bike}
          />
        </>
      }
      </div>
    </div>
  )
}

export default App

