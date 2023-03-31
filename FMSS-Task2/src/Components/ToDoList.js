import React from "react";
import ToDoItem from "./ToDoItem.js";


function ToDoList({items,setItems,removeItem}) {
  return (
    <div className="listContainer">
      {items.map((item, index) => (
        <ToDoItem
          key={index}
          item={item}
          id={index}
          removeItem={() =>removeItem(index)}
          setItems={setItems}
        />
      ))}
    </div>
  );
}

export default ToDoList;