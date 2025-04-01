import React, { useContext } from 'react'
import "./App.css"
import ai from "./assests/ai.png"
import { FaMicrophone } from "react-icons/fa6";
import { datacontext } from './Context/UserContext';

const App = () => {
  let {recognition}=useContext(datacontext)
 
 
  return (
    <div className='main'>
      <img src={ai} alt="" id='zara' />
      <span>I'm Zara, Your Virtual Assitant</span>
      <button onClick={()=>{recognition.start()}}>Click Here <FaMicrophone/></button>
      
    </div>
  )
}

export default App
