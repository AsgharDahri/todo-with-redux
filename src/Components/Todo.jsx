import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, RemoveTodo } from "../Actions/Index";
const Todo = () => {
  const dispatch = useDispatch();

  const selector = useSelector((state) => state.todoReducers.list);
  const [inputData, setinputData] = useState("");
  return (
    <div>
      <input
        placeholder="Add Items"
        value={inputData}
        onChange={(e) => {
          setinputData(e.target.value);
        }}
      />

      {/* <p>{inputData}</p> */}
      <button onClick={() => dispatch(addTodo(inputData), setinputData(""))}>
        Add
      </button>

      {
        selector.map((elem)=>{
            return(
            <h3 key={elem.id}>
                {elem.data} <button onClick={()=>dispatch(deleteTodo(elem.id))}>-</button>
            </h3>
            )
        })
      }


      <button onClick={()=>dispatch(RemoveTodo())}>Clear All</button>
    </div>
  );
};

export default Todo;
