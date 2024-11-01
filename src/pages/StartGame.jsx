import { Link } from "react-router-dom";
import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer";

function StartGame(){
    return(
        <>
            <TextInputFormContainer/ >
            <Link to='/play' className="text-blue-400">Play Game Link</Link>
        </>
    )
}

export default StartGame;