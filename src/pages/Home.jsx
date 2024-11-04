import { Link } from "react-router-dom"
import Button from "../components/Button/Button"
import { useContext, useState } from "react"
import { useEffect } from "react";
import { WordContext } from "../Context/WordContext";

function Home(){
    //const[word,setWord]=useState('');

    const{setWordList,setWord}=useContext(WordContext);
    async function fetchWords() {
        const response=await fetch('http://localhost:3000/words');
        const data=await response.json();

        setWordList([...data])

        const randomIndex = Math.floor(Math.random()*data.length)

        setWord(data[randomIndex].wordValue)
    }

    useEffect(()=>{
        fetchWords();
    })
    return(
        <>
            <Link to='/play'>
                 <Button text="Single player Game"/>
            </Link>

            <br/>
            <Link to='/start'>
            <div className="mt-4">
                <Button text="Multiplayer Game" styleType="secondary"/>
            </div>
                
            </Link>

        </>
    )
}

export default Home