import { useState } from "react";
import Todo from "./components/Todo.jsx";
import TodoInput from "./components/TodoInput.jsx";
import Actions from "./components/Actions.jsx";

const todos = [];
function App() {
  const [list,setList] = useState([]);
  const toggleStatus= (title) => {
    const nextList = list.map((todo) => {
      if (todo.title === title){
        return {
          title: todo.title,
          status: !todo.status,
        }
      }
      return todo;              
    });
     console.log("toggle",list,nextList)
     setList(nextList)
  }
  
  

  return (
    <div className="container">
         
         <TodoInput 
         handleSubmit={(value) => {
          const newItem = {
            title : value,
            status : false,
          }
          const nextList = [...list,newItem];
          setList(nextList);
         }}
         
         />
        <br /> 
        <br />
         <Actions />
         <br />
         <br />
         { list.map((todo) => {
          return  <Todo title={todo.title} status={todo.status } 
          handleCheck={toggleStatus}
          /> 
          
          
         })}
      
    </div>
  );
}

export default App;



