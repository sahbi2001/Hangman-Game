const alphabets="QWERTYUIOPASDFGHJKLZXCVBNM".split('');

function LetterButtons({text, guessedLetters, onLetterClick}){
    const guessLetterSet=new Set(guessedLetters);
    const originalWord=new Set(text.toUpperCase().split(''))
    
     const buttonStyle=function(letter){
        if(guessLetterSet.has(letter)){
            return `${originalWord.has(letter) ? 'bg-green-300' : 'bg-red-400'}`
        }
        return "bg-blue-300"
    }

    function handleLetterClick(event){
        const characterofTheLetter=event.target.value;
        onLetterClick?.(characterofTheLetter)
    }    

    const buttons=alphabets.map(letter=>{
        return(
            <button
                value={letter}
                key={`buttons-${letter}`}
                disabled={guessLetterSet.has(letter)}
                onClick={handleLetterClick}
                className={`m-1 h-12 w-12 text-white rounded-md ${buttonStyle(letter)}`}

            >
                {letter}
            </button>
        )
    })

    return (
        <>
            {buttons}
        
        </>
    )
}

export default LetterButtons;