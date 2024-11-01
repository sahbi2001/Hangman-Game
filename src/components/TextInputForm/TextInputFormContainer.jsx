import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer(){

    const[inputType,setInputType]=useState("password");
    const[value,setValue]=useState("");

    const navigate=useNavigate();  // useNAvigate is a hook that rerurns a naviagte function

    function handleFormSubmit(event){
        event.preventDefault();
        console.log("Form Submitted",value)
        if(value){
            // if we have some thing in value that need to send to another page
            navigate(`/play`,{state:{wordSelected:value}});
        }
    }


    function handleInpurTextChange(event){
        console.log("InpurTextChange ") 
        console.log(event.target.value)
        setValue(event.target.value)
    }

    function handleShowHideClick(event){
        console.log("Show/HIde button Clicked ")
        if(inputType=="password"){
            setInputType("text")
        }
        else{
            setInputType("password")
        }

        console.log(inputType)
    }


    return (
        <TextInputForm
            inputType={inputType}
            handleFormSubmit={handleFormSubmit}
            handleInpurTextChange={handleInpurTextChange}
            handleShowHideClick={handleShowHideClick}
        />
    );
}
export default TextInputFormContainer;