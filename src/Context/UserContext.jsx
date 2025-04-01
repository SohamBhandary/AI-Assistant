import React, { createContext }  from 'react'
export const datacontext=createContext()
const UserContext = ({children}) => {
    function speak(text){
        let text_speak=new SpeechSynthesisUtterance(text)
        text_speak.volume=1;
        text_speak.rate=1;
        text_speak.pitch=1;
        text_speak.lang="en-GB";
        window.speechSynthesis.speak(text_speak)
    }
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

    recognition.onstart = () => {
        console.log("Voice recognition started");
    };
    
    recognition.onerror = (event) => {
        console.error('Speech recognition error', event.error);
        if (event.error === 'no-speech') {
            console.log('No speech detected');
        }
    };
    
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log('Recognized speech:', transcript);
    };
    
    
      
   let value={
  recognition
   }
  return (
    <div>
        <datacontext.Provider value={value}>
        {children}
        </datacontext.Provider>
     
      
    </div>
  )
}

export default UserContext
