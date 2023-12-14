import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addTodoText, total } from "../calculatorSlice";
import { v4 as uuidv4 } from "uuid";

function Calculator() {
  const total = useSelector((state) => state.calculator.value);
  const dispatch = useDispatch();
  const [inpVal, setInpVal] = useState("");
  const [inpVal2, setInpVal2] = useState("");

  return (
    <div>
      <div>
        <input
          type="text"
          value={inpVal}
          onChange={(e) => setInpVal(e.target.value)}
        />
        <input
          type="text"
          value={inpVal2}
          onChange={(e) => setInpVal2(e.target.value)}
        />

        <button
          onClick={() => {
            dispatch(addTodoText({ num1: +inpVal, num2: +inpVal2, oper: "+" }));
          }}
        >
          +
        </button>
        <button  onClick={() => {
            dispatch(addTodoText({ num1: +inpVal, num2: +inpVal2, oper: "-" }));
          }}>-</button>
        <button
        onClick={() => {
            dispatch(addTodoText({ num1: +inpVal, num2: +inpVal2, oper: "*" }));
          }}
        >x</button>
        <button
        onClick={() => {
            dispatch(addTodoText({ num1: +inpVal, num2: +inpVal2, oper: "/" }));
          }}
        >/</button>

        <span>answer:{total}</span>
        {console.log(total)}

        {/* {lists.map((x) => (
          <ul key={uuidv4()} style={{display:"flex", gap:"20px"}}>
            <li key={x.id}>{x.list}</li>
            <span  onClick={()=>dispatch(removeList(x.id))}>x</span>
          </ul>
        ))} */}
      </div>
    </div>
  );
}

export default Calculator;
