export const previousQuestion = (history, setHistory, setCurrentQuestion) => {
    if (history.length > 0) {
        const previousQuestion = history.pop();
        setCurrentQuestion(previousQuestion);
        setHistory([...history]);
      }
  }