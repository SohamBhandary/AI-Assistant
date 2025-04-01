import React from 'react'
import "./App.css"
import ai from "./assests/ai.png"
import { FaMicrophone } from "react-icons/fa6";

const App = () => {
  return (
    <div className='main'>
      <img src={ai} alt="" id='zara' />
      <span>I'm Zara, Your Virtual Assitant</span>
      <button>Click Here <FaMicrophone/></button>
      
    </div>
  )
}

export default App
