import React, { useState } from "react";
import { QuizData } from "../Data/data";
import gptLogo from '../assets/chatgptLogo.svg';
import celebration from '../assets/celebration.jpeg'
import Diet from '../assets/Diet.jpeg'
import yoga from '../assets/yoga.jpeg'
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
      Vata: "  Food prefrence to keep vata in check : Hot soups & stews, Ghee, Avocados, Nuts, Coconut, Buttermilk, Olives, Eggs, Cheese, Whole milk, Wheat, Warm spices such as turmeric, flaxseeds, cinnamon, ginger, etc.",
      Pitta: "Food prefrence to keep Pitta in check : Bitter, astringent and sweet foods, Apple, Ripe Grapes, Milk, Ghee, Melon, Plum, Asparagus, Cabbage, Papaya, Cucumber, Cauliflower, Bell pepper, Legumes(lentils,spilt peas, soyabeans, black beans and wheat),Oats, Quinoa, Rice, Wheat, Almonds, Pumpkin seeds, Coconut, Sunflower seeds, ",
      Kapha: "Food prefrence to keep Pitta in check : Asparagus, beets, broccoli, Brussels sprouts, cabbage, carrots, cauliflower, celery, eggplant, garlic, leafy green vegetables, lettuce, mushrooms, okra, onions, peas peppers, potatoes, radishes, spinach, and sprouts,Apples, apricots, berries, cherries, cranberries, papaya, pears, prunes, pomegranates, and grapefruit, apricots, figs, prunes, raisins, Barley, Buckwheat, Corn, Millet, Oats, Rye, and Basmati rice.",
    };
    return dietPlans[dosha];
  };
  const getYogaPlan = (dosha) => {
    // Define yoga plans for each dosha
    const yogaPlans = {
      Vata: "  Yoga prefrence to keep vata in check : Gentle Yoga,Warming Poses, Sun Salutations, Breathing Exercise, Meditation, Routine and Regularity ",
      Pitta: " Yoga prefrence to keep Pitta in check : Hatha, Yin, Sitali Breath, Forward Bends, Avoid Overexertion ",
      Kapha: "Yoga prefrence to keep Pitta in check :  Ashtanga, Heating Meditation, Maintain Consistency",
    };
    return yogaPlans[dosha];
  };
  // const resetAll = () => {
  //   setShowResult(false);
  //   setCurrentQuestion(0);
  //   setSelectedOption(null);
  //   setVataScore(0);
  //   setPittaScore(0);
  //   setKaphaScore(0);
  //   setDoshaResult(null);
  // };

  return (
    <div>
      <div className="container">
        {showResult ? (
          <div className="bot-response">
            <p className="chat bot"><img className='chatImg'src={celebration}/><b>Your Dosha: {doshaResult}</b></p>
            <p className="chat bot"><img className='chatImg'src={Diet}/><b><b>
              </b></b> {getDietPlan(doshaResult)}</p>
            <p className="chat bot"><img className='chatImg'src={yoga}/><b><b>
              </b></b> {getYogaPlan(doshaResult)}</p>
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
                     <img src={option.image} alt={`Option ${i + 1}`} /> 
                    {option.text}
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