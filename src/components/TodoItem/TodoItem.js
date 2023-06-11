import React from "react";
import "./todoitem.css";

function TodoItem(props) {
  const { tasks, del } = props;

  const List = tasks.map((item) => {
    return (
      <div className="Item" key={item.id}>
        <span>{item.task}</span>
        <span>{item.time}</span>
        <button onClick={() => del(item.id)}>&times;</button>
      </div>
    );
  });

  return (
    <div className="ItemsList">
      <div className="head">
        <span>Name</span>
        <span>Age</span>
        <span>Action</span>
      </div>
      {List.length ? List : <p className="Empty">No Items To Show</p>}
    </div>
  );
}
export default TodoItem;
