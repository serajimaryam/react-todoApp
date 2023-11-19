import { useState } from "react";
import Todo from "./components/Todo.jsx";
import TodoInput from "./components/TodoInput.jsx";
import Actions from "./components/Actions.jsx";

const todos = [];
function App() {
  const [list,setList] = useState([]);
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
         { list.map((props) => {
          return  <Todo  title={props.title}  status={props.status } /> 
          
          
         })}
      
    </div>
  );
}

export default App;



