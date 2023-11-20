import { useState } from "react";

export default function Todo(props){
   const [deleteItem,updateItem] = useState("");
    
   return (
   <div className="todo">
   <input  handleToggleStatus={() => {

   }}type="checkbox" checked={props.status} onClick={() => {
      props.handleCheck(props.title);
   }}
    />
   <span>{props.title}</span>

  <button  className="delete-btn">delete</button>
 </div>
 ); 
}