import React from "react";
import "./SubmissionResults.css";

const SubmissionResults = ({
  totalQuestions,
  correctAnswers,
  restartQuiz,
  isTimeUp,
}) => {
  const headingText = isTimeUp ? "Time's Up!" : "Congratulations";
  return (
    <div className='submission-results-container'>
      <h1 className='submission-heading'>{headingText}</h1>
      <h4>
        Your assignment has been sucessfully submitted! Please find your results
        below -
      </h4>
      <p>
        <b>Total Number of Questions:</b> {totalQuestions}
      </p>
      <p>
        <b>Correct Answers:</b> {correctAnswers}
      </p>
      <p>
        <b>Score:</b> {((correctAnswers * 100) / totalQuestions).toFixed(2)}
      </p>
      <button className='restart-quiz-button' onClick={restartQuiz}>
        Restart Quiz
      </button>
    </div>
  );
};

export default SubmissionResults;
