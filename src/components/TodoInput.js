export default function TodoInput(){
    return(
        <form id="todo-form">
        <input type="text" placeholder="Write your todo.."  id="title"/>
        <button type="submit" id="save-btn">Save</button>
        </form>
        
    );
}