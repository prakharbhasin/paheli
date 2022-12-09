import "./App.css";
import { AnsweredQuestions } from "./Components/AnsweredQuestions/AnsweredQuestions";
import { CurrentQuestion } from "./Components/Question/CurrentQuestion";
import { useState } from "react";
import SubmissionResults from "./Components/SubmissionResults/SubmissionResults";
import { questionList } from "./Components/Questions";

function App() {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [markedAnswers, setMarkedAnswers] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [isTimeUp, setIsTimeUp] = useState(false);

  // setting Timer expiry time on the basis of number of questions
  const expiryTime = new Date();
  expiryTime.setSeconds(expiryTime.getSeconds() + questionList.length * 60);

  const handleQuestionChange = (diff) => {
    setCurrentQuestionNumber(currentQuestionNumber + diff);
  };

  const handleSubmitAnswer = (answer) => {
    const previouslyMarkedAnswers = Object.assign({}, markedAnswers);
    previouslyMarkedAnswers[currentQuestionNumber] = answer;
    setMarkedAnswers(previouslyMarkedAnswers);
  };

  const handleSubmitQuiz = (isTimeUp) => {
    let score = 0;
    Object.keys(markedAnswers).forEach((index) => {
      if (markedAnswers[index] === questionList[index].answer) {
        score++;
      }
    });

    if (isTimeUp) {
      setIsTimeUp(true);
    }

    setIsSubmitted(true);
    setQuizScore(score);
  };

  const restartQuiz = () => {
    setCurrentQuestionNumber(0);
    setMarkedAnswers({});
    setIsSubmitted(false);
    setQuizScore(0);
  };
  return (
    <div className='App'>
      {!isSubmitted ? (
        <>
          <AnsweredQuestions answers={markedAnswers} />
          <CurrentQuestion
            currentQuestionNumber={currentQuestionNumber}
            handleQuestionChange={handleQuestionChange}
            handleSubmitAnswer={handleSubmitAnswer}
            selectedAnswer={markedAnswers[currentQuestionNumber]}
            handleSubmitQuiz={handleSubmitQuiz}
            expiryTime={expiryTime}
          />
        </>
      ) : (
        <SubmissionResults
          totalQuestions={questionList.length}
          correctAnswers={quizScore}
          restartQuiz={restartQuiz}
          isTimeUp={isTimeUp}
        />
      )}
    </div>
  );
}

export default App;
