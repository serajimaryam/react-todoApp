import { useState } from "react";

export default function Todo(props){
   const [deleteItem,updateItem] = useState("");
    
   return (
   <div className="todo">
   <input type="checkbox" checked={props.status} />
   <span>{props.title}</span>
  <button  onClick ={(e) => {
     console.log("salam",e);
     props.handleDeleteItem(deleteItem)
  }}
  className="delete-btn">delete</button>
 </div>
 ); 
}