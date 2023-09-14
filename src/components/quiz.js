import React, { useState } from "react";
import { QuizData } from "../Data/data";
import QuizResult from "./quizresult";
function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [vataScore, setVataScore] = useState(0);
  const [pittaScore, setPittaScore] = useState(0);
  const [kaphaScore, setKaphaScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult,setShowResult]=useState(false);

  const handleOptionClick = (optionIndex) => {
    // Increment the respective dosha (Vata, Pitta, or Kapha) based on the selected option
    if (optionIndex === 1) {
      setVataScore(vataScore + 1);
      console.log(optionIndex);
    } else if (optionIndex === 2) {
      console.log(optionIndex);
      setPittaScore(pittaScore + 1);
    } else if (optionIndex === 3) {
      console.log(optionIndex);
      setKaphaScore(kaphaScore + 1);
    }


    setSelectedOption(optionIndex);
  };

  if(vataScore>pittaScore&&vataScore>kaphaScore){
    console.log(vataScore)
  }

  const changeQuestion = () => {
    // Check if an option has been selected before proceeding
    if (selectedOption !== null) {
      if (currentQuestion < QuizData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null); // Reset selected option for the next question
      } else {
        setShowResult(true);
      }
    } else {
      alert("Please select an option before proceeding.");
    }
  };

  const resetAll=()=>{
    setShowResult(false);
    setCurrentQuestion(0);
    handleOptionClick(0);
    setVataScore(0);
    setPittaScore(0);
    setKaphaScore(0);
}

  return (
    <div>
      <div className="container">
      {showResult ? (
                <QuizResult tryAgain={resetAll}/>
            ):(
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
        <input type="button" value="Submit" id="next-button" onClick={changeQuestion} />
        </>)}

      </div>
    </div>
  );
}

export default Quiz;
