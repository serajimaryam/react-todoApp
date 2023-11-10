import Todo  from "./src/components/Todo.js";
import TodoInput from "./components/TodoInput.js";
import Actions from "./components/Actions.js";
const todos =[
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
]
export function App() {
    return (
        <div className="container">
      <div className="form">
        <TodoInput />
        <Actions />
        </div>
      <div className="list">
        const newTodo = todos.map((props) => {
            
        })

      {/* <Todo title="item1" status={true}/>
      <Todo title="item2" status={false}/>
      <Todo title="item3" status={true}/> */}

      </div>
    </div>
    );
}