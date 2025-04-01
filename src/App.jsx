import React, { useContext } from 'react';
import "./App.css";
import ai from "./assests/ai.png";  
import { FaMicrophone } from "react-icons/fa6";
import { datacontext } from './Context/UserContext';
import speak from "./assests/speak.gif";
import aii from "./assests/aiVoice.gif"

const App = () => {
    let { recognition,speaking,setSpeaking,recog,rep,setRecog,setRep } = useContext(datacontext);

    return (
        <div className='main'>
            <img src={ai} alt="" id='zara' />
            <span>I'm Zara,Your Advance Virtual Assistant</span>
            {!speaking? <button onClick={() => { setRep(false) ;setRecog("listening....") ; setSpeaking(true) ;recognition.start() }}>
                Click Here <FaMicrophone />
            </button>:  
            <div className='response'>
              {!rep?
              <img src={speak} alt="" id="speakimg" />:  <img src={aii} alt="" id="aigif" />}
              <p>{recog}</p>
            </div>
            
          
            }
           
        </div>
    );
};

export default App;
