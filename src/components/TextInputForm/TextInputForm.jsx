import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";


function TextInputForm({inputType,handleFormSubmit,handleInpurTextChange,handleShowHideClick}){

    return(
        <form onSubmit={handleFormSubmit}>
            <div>
                <TextInput
                    type={inputType}
                    label={"enter some text"}
                    placeholder='enter you text here'
                    onChangeHandler={handleInpurTextChange}
                />
            </div>

            <div>
                <Button
                    styleType="warning"
                    text={inputType=="password" ? "Show" : "Hide"}
                    onClickHandler={handleShowHideClick}
                />
            </div>

            <div>
                <Button
                    type="submit"
                    styleType="primary"
                    text="submit"                
                />
            </div>
        </form>
    )
}

export default TextInputForm;