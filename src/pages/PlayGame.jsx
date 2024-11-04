import { Link,useParams } from "react-router-dom";
import MaskedText from "../components/MaskedText/MaskedText"
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useContext, useState } from "react";
import Hangman from "../components/Hangman/Hangman";
import { WordContext } from "../Context/WordContext";
function PlayGame(){
    
    //const{text}=useParams();

   // const {state}=useLocation();


    const [guessedLetters,setGuessedLetters]=useState([]);
    const[step,setStep]=useState(0);

    const{wordList,word}=useContext(WordContext);

    function handleLetterClick(letter){
        if(word?.toUpperCase().includes(letter)){
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
        <h1> Play Game</h1>
        {wordList.map(wordObject=> <li key={wordObject.id}>{wordObject.wordValue}</li>)}

        {word && (
            <>
                <MaskedText text={word} guessedLetters={guessedLetters}/>

                    <div>
                        <LetterButtons text={word} guessedLetters={guessedLetters} onLetterClick={handleLetterClick}/>
                    </div>

                    <Hangman step={step}/>
                    <Link to='/start' className="text-blue-400">Start Game Link</Link>

            </>
        )}
        
    </>
    )
}

export default PlayGame;