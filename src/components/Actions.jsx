import { useState } from "react";

export default function Actions(){
    [newstatus,setState] = useState(done);
    return (
        <div>
        <button type="button" id="delete">DELETE ALL</button>
        <br /><br /> 
        <input type="text" placeholder="Search"  id="search"/>
        <button type="submit" id="search-btn">Search</button>
        <br /><br />       
        Status:
        <select 
         
         className="item-filter">
          <option value="done">Done</option>
          <option value="todo">Todo</option>
          <option value="all">All</option>
        </select>
        </div>
    );
}