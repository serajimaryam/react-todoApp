import { useState } from "react";
function onAddItem(){
    
}
export default function TodoInput(props){
    const [my_string, update_string] = useState("")
    return(
        <div>
        <input 
        onChange={(e) =>{
            const char = e.target.value;
            update_string(char);
            
        }}
        type="text"
        placeholder="Write your todo.." 
        id="title"/>
        <button onClick={() => {
            props.handleSubmit(my_string);         

        }}

         id="save-btn">Save</button>
        </div>
        
        
    );
} 
