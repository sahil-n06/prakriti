import './App.css';
import gptLogo from './assets/chatgpt.svg'
import addBtn from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'
import userIcon from './assets/user-icon.png'
import gptImgLogo from './assets/chatgptLogo.svg'
import Quiz from './components/quiz';


const handlePrakarti = ()=>{
  console.log("checking the what is prakarti")
}

const handleQuery = ()=>{
  console.log("checking the how to use prakarti")
}


function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className='upperSide'>
          <div className='upperSideTop'><img src={gptLogo} alt='logo' className='logo' /><span className='brand'>PRAKRITI</span></div>
          <button className='midBtn'><img src={addBtn} alt='' className='addBtn' />New Chat</button>
          <div className='upperSideBottom'>
            <button className='query' onClick={handlePrakarti} value={'What is PRAKRITI'} ><img src={msgIcon} alt='' />What is PRAKRITI</button>
            <button className='query' onClick={handleQuery} value={'How to use PRAKRITI'} ><img src={msgIcon} alt='' />How to use PRAKRITI</button>
          </div>
        </div>
        <div className='lowerSide'>
          <div className='listItems'><img src={home} alt='' className='listItemsImg' />Home</div>
          <div className='listItems'><img src={saved} alt='' className='listItemsImg' />Saved</div>
          <div className='listItems'><img src={rocket} alt='' className='listItemsImg' />Upgrade</div>
        </div>
      </div>
      <div className="main">
       <div className='chats'>
       <div className='chat bot'>
          <img className='chatImg' src='' alt=''/><p className='txt'>Hi, I'm PRAKRITI.<br></br>I can help you Learn more about your Doshas</p>
        </div>
        <div className='chat bot'>
          <img className='chatImg' src='' alt=''/><p className='txt'><Quiz/></p>
        </div>
        <div className='chat'>
          <img className='chatImg' src='' alt='usericon'/><p className='txt'></p>
        </div>
       </div>
    </div>
    </div>
  );
}

export default App;