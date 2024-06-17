import { questions } from '../data/questions';
import { recommendations } from '../data/recommendations';

const Question = ({ currentQuestion, setCurrentQuestion, setBike }) => {
  
  const handleSelectedOption = (option) => {
    if (!option.next) {
      setCurrentQuestion(null);
      const bike = recommendations.find(b => b.id === option.selectedBikeId);
      setBike(bike);
    } else {
      const question = questions.find(q => q.id === option.next);
      setCurrentQuestion(question);
    }
  };

  return (
    <>
      {currentQuestion ? (
        <div>
          <h3>{currentQuestion.question}</h3>
          <div className='options'>
            {currentQuestion.options.map((option, idx) => (
              <button key={idx} className='option' onClick={() => handleSelectedOption(option)}>
                <h4>{option.text}</h4>
                <img src={option.image} alt="" />
                <p>{option.description}</p>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>No question found or loading...</div>
      )}
    </>
  );
};

export default Question;