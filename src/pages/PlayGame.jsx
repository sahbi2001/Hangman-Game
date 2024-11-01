import { Link, useLocation, useParams } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText"
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useState } from "react";
import Hangman from "../components/Hangman/Hangman";
function PlayGame(){
    
    //const{text}=useParams();

    const {state}=useLocation();
    const [guessedLetters,setGuessedLetters]=useState([]);
    const[step,setStep]=useState(0);

    function handleLetterClick(letter){
        if(state.wordSelected.toUpperCase().includes(letter)){
            console.log('correct guess');
        }
        else{
            console.log('wrong guess');
            setStep(step+1)
        }
        setGuessedLetters([...guessedLetters,letter])
    }
    return(
        <>
        <h1> Play Game{state.wordSelected}</h1>
        <MaskedText text={state.wordSelected} guessedLetters={guessedLetters}/>

        <div>
            <LetterButtons text={state.wordSelected} guessedLetters={guessedLetters} onLetterClick={handleLetterClick}/>
        </div>

        <Hangman step={step}/>
        <Link to='/start' className="text-blue-400">Start Game Link</Link>
    </>
    )
}

export default PlayGame;