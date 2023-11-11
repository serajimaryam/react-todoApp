import Todo from "./components/Todo.js";
import TodoInput from "./components/TodoInput.js";
import Actions from "./components/Actions.js";

const todos = [
  {
    title: "item1",
    statuse: true,
  },
  {
    title: "item2",
    status: false,
  },
  {
    title: "item3",
    status: true,
  },
];
function App() {
  return (
    <div className="container">
         <Actions />
         <br />
         <TodoInput />
         <br />
         { todos.map((props) => {
          return  <Todo title={props.title}  status={props.status } />
          
         })}
      
    </div>
  );
}

export default App;
