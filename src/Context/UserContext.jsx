import React, { createContext, useState } from 'react';
import run from '../genimi';

export const datacontext = createContext();

const UserContext = ({ children }) => {
    let [speaking,setSpeaking]=useState(false)
    let [recog,setRecog]=useState("listening....")
    let [rep,setRep]=useState(false)
    function speak(text) {
        let text_speak = new SpeechSynthesisUtterance(text);
        text_speak.volume = 1;
        text_speak.rate = 1;
        text_speak.pitch = 1;
        text_speak.lang = "en-GB";
        window.speechSynthesis.speak(text_speak);
    }

    async function aiResponse(prompt) {
        let text = await run(prompt);
        text = text.replaceAll("google", "Soham").replaceAll("Google", "Soham");
        
        // Remove Markdown-style bold/italic symbols (* and **)
        let cleanText = text.replace(/\*\*/g, "").replace(/\*/g, "");
        
        setRecog(cleanText);
        speak(cleanText);
        
        setRep(true)
        setTimeout(() => {
            setSpeaking(false)
            
        }, 4000);
       
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
        setRecog(transcript)
      takeCommand(transcript.toLowerCase())
    };

    function takeCommand(command){
        if(command.includes("open")&&command.includes("youtube")){
            window.open("https://www.youtube.com/","_blank")
            speak("Opening Youtube....")
            set
            setRecog("Opening Youtube....")
            setTimeout(() => {
                setSpeaking(false)
                
            }, 5000);
           
        }
        else{
            aiResponse(command)
        }
    }
    let value = { recognition,speaking,setSpeaking,recog,setRecog,rep,setRep };

    return (
        <datacontext.Provider value={value}>
            {children}
        </datacontext.Provider>
    );
};

export default UserContext;
