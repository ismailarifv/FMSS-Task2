import React, { useState } from "react";
import "../App.css"

function ToDoItem(props) {

  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(props.item.text);
// Burda listedeki itemleri değiştirmek için fonksiyonlar oluşturuldu.
  function handleCheck() {
    props.setItems((prevState) =>
      prevState.map((item, index) =>
        index === props.id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  function handleInputBlur() {
    setEdit(false);
    props.setItems((prevState) =>
      prevState.map((item, index) =>
        index === props.id ? { ...item, text } : item
      )
    );
  }

  return (
    <div
      className={
        "itemContainer " +
        (props.item.completed ? "checkedItems" : "uncheckedItems")
      }
    >
      <div className="checkbox-wrapper-39">
        <label>
          <input
            type="checkbox"
            checked={props.item.completed}
            onChange={handleCheck}
          />
          <span className="checkbox"></span>
        </label>
      </div>

      {edit ? (
        <input
          id={`listItem${props.id}`}
          className="listItemText"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={handleInputBlur}
          autoFocus
        />
      ) : (
        <input
          id={`listItem${props.id}`}
          className="listItemText"
          onClick={() => setEdit(true)}
          value={props.item.text}
          onChange={() => console.log("")}
        />
      )}

      <button
        className="removeItemButton"
        onClick={() => props.removeItem(props.id)}
      >
        x
      </button>
    </div>
  );
}

export default ToDoItem;