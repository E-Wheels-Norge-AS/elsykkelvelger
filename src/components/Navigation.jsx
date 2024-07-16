import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong, faRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { previousQuestion } from '../functions/previousQuestion'
import { reset } from '../functions/reset'


const Navigation = ({history, setHistory, setCurrentQuestion, questions, setIsRecommendation, isRecommendation}) => {
  return (
    <>
        {history.length > 0 && (
            <div className='navigation'>
                {
                    !isRecommendation ? 
                    <button className='previous-question' onClick={() => previousQuestion(history, setHistory, setCurrentQuestion)}>
                        <FontAwesomeIcon className='previous-question_arrow' icon={faArrowLeftLong} /> Forrige spørsmål
                    </button>
                    : null
                }
                <button className='reset' onClick={() => reset(setHistory, setCurrentQuestion, questions, setIsRecommendation)}>
                    <FontAwesomeIcon className='reset_icon' icon={faRotateLeft} /> Start på nytt
                </button>
            </div>
        )}
    </>
  )
}

export default Navigation