import React from "react";
import "./AnsweredQuestions.css";

export const AnsweredQuestions = ({ answers }) => {
  return (
    <div className='answered-questions-container'>
      <h2 className='answered-questions-heading'>Review Answers</h2>
      {Object.keys(answers).map((index) => {
        return <h4>{`#${eval(index) + 1} ${answers[index].toString()}`}</h4>;
      })}
    </div>
  );
};
