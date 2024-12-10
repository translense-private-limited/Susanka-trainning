import React, { useCallback, useState, useEffect, useMemo } from "react";
import QUESTIONS from "../questions";
import quizCompleteImage from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";
import "../index.css";

const timer = 15000;

const Quiz = () => {
  const [answerState, setAnsweredState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;

  const isQuizComplete = activeQuestionIndex >= QUESTIONS.length;

  useEffect(() => {
    if (activeQuestionIndex < QUESTIONS.length) {
      const shuffle = [...QUESTIONS[activeQuestionIndex].answers];
      shuffle.sort(() => Math.random() - 0.5);
      setShuffledAnswers(shuffle);
    }
  }, [activeQuestionIndex]);

  const handleSelectAnswer = useCallback(
    (selectedAnswer) => {
      setUserAnswers((prevState) => {
        const updatedAnswers = [...prevState, selectedAnswer];
        console.log("updatedAnswers :", updatedAnswers);
        return updatedAnswers;
      });

      setAnsweredState("answered");

      if (activeQuestionIndex < QUESTIONS.length) {
        const correctAnswer = QUESTIONS[activeQuestionIndex].answers[0];
        setTimeout(() => {
          if (selectedAnswer === correctAnswer) {
            setAnsweredState("correct");
          } else {
            setAnsweredState("wrong");
          }

          setTimeout(() => {
            setAnsweredState("");
          }, 2000);
        }, 1000);
      }
    },
    [activeQuestionIndex]
  );

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index]?.answers[0]
  ).length;

  const incorrectAnswers = userAnswers.filter(
    (answer, index) =>
      answer !== null && answer !== QUESTIONS[index]?.answers[0]
  ).length;

  const skippedQuestions = userAnswers.filter(
    (answer) => answer === null
  ).length;
  const totalQuestions = QUESTIONS.length;

  const correctPercentage = ((correctAnswers / totalQuestions) * 100).toFixed(
    2
  );
  const incorrectPercentage = (
    (incorrectAnswers / totalQuestions) *
    100
  ).toFixed(2);
  const skippedPercentage = ((skippedQuestions / totalQuestions) * 100).toFixed(
    2
  );

  if (isQuizComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImage} alt="Quiz Complete" />
        <h2>Quiz Complete!</h2>
        <div id="summary-stats">
          <p>
            <span className="number">{skippedPercentage}</span>
            <span className="text">Skipped</span>
          </p>
          <p>
            <span className="number">{correctPercentage}</span>
            <span className="text">Correct Answers</span>
          </p>
          <p>
            <span className="number">{incorrectPercentage}</span>
            <span className="text">inCorrect Answers</span>
          </p>
        </div>
        <ol>
          {QUESTIONS.map((question, index) => {
            let cssClasses = "user-answer";
            const userAnswer = userAnswers[index];
            const correctAnswer = question.answers[0];
            const isCorrect = userAnswer === correctAnswer;
            const isSkipped = userAnswer === null;

            if (isSkipped) {
              cssClasses += " skipped";
            } else if (isCorrect) {
              cssClasses += " correct";
            } else {
              cssClasses += " wrong";
            }

            return (
              <li key={index}>
                <h3>{index + 1}</h3>
                <p>{question.text}</p>
                <p className={cssClasses}>
                  Your Answer: {userAnswer || "Skipped"}
                </p>
                <p className="correct">Correct Answer: {correctAnswer}</p>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }

  return (
    <div id="quiz">
      <div id="question">
        {activeQuestionIndex < QUESTIONS.length && (
          <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        )}
        <ul id="answers">
          {shuffledAnswers.map((answer) => {
            const isSelected = userAnswers[userAnswers.length - 1] === answer;
            let cssClasses = "";

            if (isSelected) {
              if (answerState === "answered") {
                cssClasses = "selected";
              }
              if (answerState === "correct") {
                cssClasses = "correct";
              }
              if (answerState === "wrong") {
                cssClasses = "wrong";
              }
            }

            return (
              <li key={answer} className="answer">
                <button
                  onClick={() => handleSelectAnswer(answer)}
                  className={cssClasses}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <QuestionTimer
        key={activeQuestionIndex}
        timer={timer}
        onTimeOut={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
