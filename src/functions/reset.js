export const reset = (setHistory, setCurrentQuestion, questions, setIsRecommendation) => {
    setHistory([])
    setCurrentQuestion(questions[0])
    setIsRecommendation(false)
}