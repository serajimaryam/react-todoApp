import { useState } from "react";
function onAddItem(){
    
}
export default function TodoInput(props){
    const [inputValue, setInputValue] = useState("")
    return(
        <div>
        <input 
        value={inputValue}
        onChange={(e) =>{
            const char = e.target.value;
            setInputValue(char);
            
        }}
        type="text"
        placeholder="Write your todo.." 
        id="title"/>
        <button onClick={() => {
            props.handleSubmit(inputValue); 
            setInputValue("");

        }}

         id="save-btn">Save</button>
        </div>
        
        
    );
} 
