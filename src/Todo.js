import React, { useState } from "react";
import "./Todo.css";
import TodoAdd from "./TodoAdd";

function Todo() {
  const [input, setInput] = useState("");
  const [input1, setInput1] = useState([]);

  const Click = () => {
    if (!input) {
      alert("enter");
    } else {
      const data = [...input1, input];
      setInput1(data);

      console.log([...input1, input]);

      setInput("");
    }
  };

  const deleteTodo = (id) => {
    const data = input1.filter((item, idx) => id !== idx);
    setInput1(data);
  };

  return (
    <div className="todocontainer">
      <div className="todoinner">
        <h1>My todo list</h1>
        <input
          onChange={(event) => setInput(event.target.value)}
          value={input}
          placeholder="enter your data"
          className="todoinput"
        />
        <span onClick={Click} className="button">
          +
        </span>
      </div>
      <div>
        {input1.map((item, id) => {
          return (
            <TodoAdd key={item} id={id} deleteTodo={deleteTodo} Add={item} />
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
