import React, { useEffect } from "react";
import "./CurrentQuestion.css";
import { questionList } from "../Questions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useTimer } from "react-timer-hook";

export const CurrentQuestion = ({
  currentQuestionNumber,
  handleQuestionChange,
  handleSubmitAnswer,
  selectedAnswer,
  handleSubmitQuiz,
  expiryTime,
}) => {
  const { seconds, minutes, hours } = useTimer({
    expiryTimestamp: expiryTime,
    onExpire: () => handleSubmitQuiz(true),
  });
  return (
    <div className='current-question-container'>
      <div className='current-question-header'>
        {!(currentQuestionNumber === 0) && (
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={() => handleQuestionChange(-1)}
            id='question-nav-icon'
          />
        )}
        <h2 className='current-question-number'>{`Question ${
          currentQuestionNumber + 1
        }`}</h2>
        {!(currentQuestionNumber === questionList.length - 1) && (
          <FontAwesomeIcon
            icon={faArrowRight}
            onClick={() => handleQuestionChange(+1)}
            id='question-nav-icon'
          />
        )}
      </div>
      <div className='current-question-body'>
        <h3>{questionList[currentQuestionNumber].question}</h3>
        {questionList[currentQuestionNumber].options.map((option) => {
          return (
            <label className='question-option-label'>
              <input
                type='radio'
                value={option}
                checked={selectedAnswer === option}
                onChange={() => handleSubmitAnswer(option)}
              />
              {option}
            </label>
          );
        })}
      </div>
      <div className='submit-container'>
        <p className='timer'>{`${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}</p>
        {currentQuestionNumber === questionList.length - 1 && (
          <button
            className='submit-button'
            onClick={() => handleSubmitQuiz(false)}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};
