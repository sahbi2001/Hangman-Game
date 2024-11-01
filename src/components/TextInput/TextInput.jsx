function TextInput({label,type="text",placeholder="Enter your text",value,onChangeHandler}){
    return(
        
        <label> 
            <span className="text-gray-700">{label}</span>
                <input 
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChangeHandler}
                    className="px-4 py-2 border-gray-500 rounded-md w-full"
                />
        </label>
    )

}

export default TextInput;