import React from "react";
import "./AnsweredQuestions.css";

export const AnsweredQuestions = ({ answers }) => {
  return (
    <div className='answered-questions-container'>
      <h2 className='answered-questions-heading'>Review Answers</h2>
      <div className='answered-questions-body'>
        {Object.keys(answers).map((index) => {
          return <h3>{`#${eval(index) + 1} ${answers[index].toString()}`}</h3>;
        })}
      </div>
    </div>
  );
};
