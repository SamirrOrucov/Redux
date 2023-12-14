import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addTodoText, removeList } from "../todoSlice";
import { v4 as uuidv4 } from 'uuid';

function TodoApp() {
  const lists = useSelector((state) => state.todo.value);
  const dispatch = useDispatch();
  const [inpVal, setInpVal] = useState("");
  console.log(inpVal);
  return (
    <div>
      <div>
        <input
          type="text"
          name=""
          id=""
          value={inpVal}
          onChange={(e) => setInpVal(e.target.value)}
        />

        <button
          onClick={() => {
            dispatch(addTodoText({list:inpVal,id:uuidv4()}));
            setInpVal(" ");
            
          }}
        >
          add todo
        </button>
        {console.log(lists)}
        {lists.map((x) => (
          <ul key={uuidv4()} style={{display:"flex", gap:"20px"}}>
            <li key={x.id}>{x.list}</li>
            <span  onClick={()=>dispatch(removeList(x.id))}>x</span>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default TodoApp;
