import React, { useState } from "react";
import { QuizData } from "../Data/data";
import gptLogo from '../assets/chatgptLogo.svg';
import celebration from '../assets/celebration.jpeg'
import Diet from '../assets/Diet.jpeg'
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

    setTimeout(() => {
      goToNextQuestion();
    }, 100); // delay (in milliseconds) apne hisaab se change krr lena
  };

  const goToNextQuestion = () => {
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null); 
    } else {
      const dosha = getDosha();
      setDoshaResult(dosha);
      setShowResult(true);
    }
  };

  const getDosha = () => {
    if (vataScore > pittaScore && vataScore > kaphaScore) {
      return "Vata";
    } else if (pittaScore > vataScore && pittaScore > kaphaScore) {
      return "Pitta";
    } else if (kaphaScore > vataScore && kaphaScore > pittaScore) {
      return "Kapha";
    } else if (kaphaScore === vataScore && kaphaScore > pittaScore) {
      return "Kapha and Vata";
    } else if (kaphaScore === pittaScore && kaphaScore > vataScore) {
      return "Kapha and Pitta";
    } else if (pittaScore === vataScore && pittaScore > kaphaScore) {
      return "Pitta and Vata";
    } else if (kaphaScore === vataScore && kaphaScore < pittaScore) {
      return "Pitta";
    } else if (kaphaScore === pittaScore && kaphaScore < vataScore) {
      return "Vata";
    } else if (pittaScore === vataScore && pittaScore < kaphaScore) {
      return "Kapha";
    } else {
      return "Balanced";
    }
  };

  const getDietPlan = (dosha) => {
    // Define diet plans for each dosha
    const dietPlans = {
      Vata: "Diet plan for Vata dosha.",
      Pitta: "Diet plan for Pitta dosha.",
      Kapha: "Diet plan for Kapha dosha.",
    };
    return dietPlans[dosha];
  };

  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setVataScore(0);
    setPittaScore(0);
    setKaphaScore(0);
    setDoshaResult(null);
  };

  return (
    <div>
      <div className="container">
        {showResult ? (
          <div className="bot-response">
            <p className="chat bot"><img className='chatImg'src={celebration}/><b>Your Dosha: {doshaResult}</b></p>
            <p className="chat bot"><img className='chatImg'src={Diet}/><b>Diet Plan:</b> {getDietPlan(doshaResult)}</p>
          </div>
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
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;
