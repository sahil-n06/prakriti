import React, { useState } from "react";
import { QuizData } from "../Data/data";
import QuizResult from "./quizresult";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [vataScore, setVataScore] = useState(0);
  const [pittaScore, setPittaScore] = useState(0);
  const [kaphaScore, setKaphaScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [doshaResult, setDoshaResult] = useState(null);

  const handleOptionClick = (optionIndex) => {
    if (optionIndex === 1) {
      setVataScore(vataScore + 1);
    } else if (optionIndex === 2) {
      setPittaScore(pittaScore + 1);
    } else if (optionIndex === 3) {
      setKaphaScore(kaphaScore + 1);
    }

    setSelectedOption(optionIndex);
  };

  const getDosha = () => {
    if (vataScore > pittaScore && vataScore > kaphaScore) {
      return "Vata";
    } else if (pittaScore > vataScore && pittaScore > kaphaScore) {
      return "Pitta";
    } else if (kaphaScore > vataScore && kaphaScore > pittaScore) {
      return "Kapha";
    } else if (kaphaScore === vataScore && kaphaScore > pittaScore) {
      return "Kapha and vata";
    } else if (kaphaScore === pittaScore && kaphaScore > pittaScore) {
      return "Kapha and pitta";
    }else if (pittaScore === vataScore && pittaScore > kaphaScore) {
      return "pitta and vata";
    } else if (kaphaScore === vataScore && kaphaScore < pittaScore) {
      return "pitta";
    } else if (kaphaScore === pittaScore && kaphaScore < vataScore) {
      return "vata";
    } else if (pittaScore === vataScore && pittaScore < kaphaScore) {
      return "kapha";
    }else {
      return "Balanced";
    }
  };

  const changeQuestion = () => {
    if (selectedOption !== null) {
      if (currentQuestion < QuizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(0);
      } else {
        const dosha = getDosha();
        setDoshaResult(dosha);
        setShowResult(true);
      }
    } else {
      alert("Please select an option before proceeding.");
    }
  };

  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    handleOptionClick(0);
    setVataScore(0);
    setPittaScore(0);
    setKaphaScore(0);
    setDoshaResult(null);
  };

  return (
    <div>
      <div className="container">
        {showResult ? (
          <QuizResult doshaResult={doshaResult} tryAgain={resetAll} />
        ) : (
          <>
            <div className="question">
              <span id="question-number">{currentQuestion + 1}.</span>
              <span id="question-txt">{QuizData[currentQuestion].question}</span>
            </div>
            <div className="option-container">
              {QuizData[currentQuestion].options.map((option, i) => {
                return (
                  <button
                    className={`option-btn ${
                      selectedOption === i + 1 ? "checked" : null
                    }`}
                    key={i}
                    onClick={() => handleOptionClick(i + 1)}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            <input
              type="button"
              value="Submit"
              id="next-button"
              onClick={changeQuestion}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
