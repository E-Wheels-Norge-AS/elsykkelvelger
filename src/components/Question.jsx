import Navigation from "./Navigation";
import ProgressBar from "./ProgressBar";

const Question = ({navigationProps, currentQuestion, setCurrentQuestion, history, setHistory, setSlug, setIsRecommendation, progress, questions  }) => {   
    const handleOptionClick = (option) => {
        setHistory([...history, currentQuestion]);
        if (option.options && option.options.length > 0) {
            setCurrentQuestion(option);
            setIsRecommendation(false)
        } else {
            setSlug(option.slug)
            setIsRecommendation(true)
        }
    };



    return (
        <div className="main-container">
            <div className="header">
                <h1>Elsykkelvelgeren</h1>
                <h2>Svar på spørsmålene under, så finner vi den perfekte elsykkelen til deg</h2>
            </div>
            <ProgressBar progress={progress}/>
            <Navigation {...navigationProps} />
            <div className="question-container">
                <h3>{currentQuestion.question}</h3>
                <ul className="options">
                    {currentQuestion.options.map((bike, index) => (
                        <li key={index} onClick={() => handleOptionClick(bike)}>
                            <h4>{bike.title}</h4>
                            <div className="image_container">
                                <img src={bike.image ? bike.image : "./optionsImages/asfalt.webp"} alt={bike.title}/>
                            </div>
                            <p>{bike.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Question