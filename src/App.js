import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import gptLogo from './assets/chatgpt.jpg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import useric from './assets/user-ic.jpeg';
import gptImgLogo from './assets/chatgptLogo.jpg';
import Quiz from './components/quiz';
import { QuizData } from './Data/data';

function App() {
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: "Hi, I'm PRAKRITI. I can help you learn more about your Doshas.",
    },
  ]);

  const [showQuiz, setShowQuiz] = useState(false);
  const chatContainerRef = useRef(null);

  const generateUniqueKey = () => {
    return Math.random().toString(36).substring(7); // Generate a unique key
  };

  useEffect(() => {
    // Scroll to the latest chat message when chatMessages change
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [chatMessages]);

  const handlePrakarti = () => {
    const userMessage = {
      id: generateUniqueKey(), // Generate a unique ID
      type: 'user',
      text: 'What is PRAKRITI',
    };
    setChatMessages(prevMessages => [...prevMessages, userMessage]);

    const botResponse = {
      id: generateUniqueKey(), // Generate a unique ID
      type: 'bot',
      text: 'PRAKRITI is a concept in Ayurveda that defines your unique mind-body constitution. It is influenced by your dominant dosha—Vata, Pitta, or Kapha.I provide the relevant information so,my name is also Prakriti',
    };

    setTimeout(() => {
      setChatMessages(prevMessages => [...prevMessages, botResponse]);
    }, 1000);
  };

  const handleQuery = () => {
    const userMessage = {
      id: generateUniqueKey(), // Generate a unique ID
      type: 'user',
      text: 'How to use PRAKRITI',
    };
    setChatMessages(prevMessages => [...prevMessages, userMessage]);

    const botResponse = {
      id: generateUniqueKey(), // Generate a unique ID
      type: 'bot',
      text: 'You can use PRAKRITI to learn more about your doshas by taking a quiz. Simply click on "Know your Dosha" to start the quiz, and I will guide you through it.',
    };

    setTimeout(() => {
      setChatMessages(prevMessages => [...prevMessages, botResponse]);
    }, 2000);
  };

  const handleDosha = () => {
    const userMessage = {
      id: generateUniqueKey(), // Generate a unique ID
      type: 'user',
      text: 'What is Dosha classifictaion?',
    };
    setChatMessages(prevMessages => [...prevMessages, userMessage]);

    const botResponse = {
      id: generateUniqueKey(), // Generate a unique ID
      type: 'bot',
      text: 'checking what is dosha.',
    };

    setTimeout(() => {
      setChatMessages(prevMessages => [...prevMessages, botResponse]);
    }, 1000);
  };

  const handleAyurveda = () => {
    const userMessage = {
      id: generateUniqueKey(), // Generate a unique ID
      type: 'user',
      text: 'What is Ayurveda?',
    };
    setChatMessages(prevMessages => [...prevMessages, userMessage]);

    const botResponse = {
      id: generateUniqueKey(), // Generate a unique ID
      type: 'bot',
      text: 'checking what is ayurveda.',
    };

    setTimeout(() => {
      setChatMessages(prevMessages => [...prevMessages, botResponse]);
    }, 1000);
  };

  const openQuiz = () => {
    setShowQuiz(true); // Set the state to true to display the quiz
  };

  return (
    <div className="App">
      <div className="sideBar">
        <div className='upperSide'>
          <div className='upperSideTop'><img src={gptLogo} alt='logo' className='logo' /><span className='brand'>PRAKRITI</span></div>
          <button className='midBtn' onClick={() => { window.location.reload() }} ><img src={addBtn} alt='' className='addBtn' />New Chat</button>
          <div className='upperSideBottom'>
            <button className='query' onClick={handlePrakarti} value={'What is PRAKRITI'} ><img src={msgIcon} alt='' />What is PRAKRITI</button>
            <button className='query' onClick={handleDosha} value={'What is Dosha classifictaion?'} ><img src={msgIcon} alt='' />What is Dosha classifictaion?</button>
            <button className='query' onClick={handleAyurveda} value={'What is Ayurveda?'} ><img src={msgIcon} alt='' />What is Ayurveda?</button>
            <button className='query' onClick={handleQuery} value={'How to use PRAKRITI'} ><img src={msgIcon} alt='' />How to use PRAKRITI</button>
            <button className='query' onClick={openQuiz}><img src={msgIcon} alt='' />Know your Dosha</button>
          </div>
        </div>
        <div className='lowerSide'>
          <div className='listItems'><img src={home} alt='' className='listItemsImg' />Home</div>
          <div className='listItems'><img src={saved} alt='' className='listItemsImg' />Saved</div>
          <div className='listItems'><img src={rocket} alt='' className='listItemsImg' />Upgrade</div>
        </div>
      </div>
      <div className="main">
        <div className='chats' ref={chatContainerRef}>
          {chatMessages.map((message) => (
            <div className={`chat ${message.type}`} key={message.id}>
              <img className='chatImg' src={message.type === 'bot' ? gptImgLogo : useric } alt='' />
              <p className={`txt ${message.type === 'user' ? 'user-message' : ''}`}>{message.text}</p>
            </div>
          ))}{showQuiz && <Quiz />}
        </div>
      </div>
    </div>
  );
}

export default App;
