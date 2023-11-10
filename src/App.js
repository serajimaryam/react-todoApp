import Todo  from "./src/components/Todo.js";
import TodoInput from "./components/TodoInput.js";
export function App() {
    return (
        <div className="container">
      <div className="form">
        <TodoInput />
        <br /><br />
        <button type="button" id="delete">DELETE</button>
        <br /><br /> 
        <input type="text" placeholder="Search"  id="search"/>
        <button type="submit" id="search-btn">Search</button>
        <br /><br />       
        Status:
        <select className="item-filter">
          <option value="done">Done</option>
          <option value="todo">Todo</option>
          <option value="all">All</option>
        </select>
        </div>
      <div className="list">
      <Todo title="item1" status={true}/>
      <Todo title="item2" status={false}/>
      <Todo title="item3" status={true}/>
      
         <div classNAME="todo">
          <input type="checkbox" name="" id="" />
          <button className="delete-btn">delete</button>
          <span>item1</span>
        </div> 
        
      </div>
    </div>
    );
}