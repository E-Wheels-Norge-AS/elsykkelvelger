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
                    <button onClick={() => previousQuestion(history, setHistory, setCurrentQuestion)}>
                        <FontAwesomeIcon icon={faArrowLeftLong} /> Forrige spørsmål
                    </button>
                    : null
                }
                <button onClick={() => reset(setHistory, setCurrentQuestion, questions, setIsRecommendation)}>
                    <FontAwesomeIcon icon={faRotateLeft} /> Start på nytt
                </button>
            </div>
        )}
    </>
  )
}

export default Navigation