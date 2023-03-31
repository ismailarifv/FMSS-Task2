import React, { useState } from "react";
import "./App.css";
import ToDoList from "./Components/ToDoList";
import Footer from "./Components/Footer";

function App() {
  // İki farklı stte oluşturuyoruz birisi inputun içinde oluşan değişiklikleri güncellemek için diğeri ise
  // listemizi güncellemek için ve listemizdeki objeleri bir dizi içerisinde tutmak istiyoruz.
  const [input, setInput] = useState("");
  const [items, setItems] = useState([
    { id: 1, text: "HTML", completed: false },
    { id: 2, text: "CSS", completed: false },
    { id: 3, text: "Javascript", completed: false },
    { id: 4, text: "React", completed: false },
    { id: 5, text: "Find a Practicum", completed: false },
  ]);

  //handleInput fonksiyonu inputun içine yazılan şeyleri farkına varabilmesi için onChange için oluşturduk.
  function handleInput(e) {
    setInput(e.target.value);
  }

  //addItem fonksiyonunu  inputun içine yazdığım herhangi bir şeyi listeme eklemek istiyorsam enter tuşuna
  //basarak  göndermek için ve hepsinin id'leri bir öncekinden 1 fazla olması için oluşturduk bunun için newId isimli değişkene bakabilirsiniz.
  
  function addItem(e) {
    if (e.key === "Enter") {
      const newId =
        items.length > 0 ? Math.max(...items.map((item) => item.id)) + 1 : 1;

      setItems([...items, { id: newId, text: input, completed: false }]);
      setInput("");
    }
  }

  // toggleAllCompleted fonksiyonunda hem listemizdeki her şeyi tek seferde tamamlanmış gösterebiliyoruz veya tamamlanmamışa çevirebiliyoruz.

  function toggleAllCompleted() {
    const allChecked = items.every((item) => item.completed);
    setItems(items.map((item) => ({ ...item, completed: !allChecked })));
    document.querySelector('button').classList.toggle('large')
  }
 
//removeItem fonksiyonu x işaretine basılınca basılan hariç diğerlerini göstermesi için set eden bir fonksiyon
  function removeItem(index) {
    setItems(items.filter((item, i) => i !== index));
  }

  return (
    <div className="App">
      <h1 className="todos-text">todos</h1>
      <div className="notebookContainer">
        <div className="inputContainer">
          <button className="markAllCompleted" onClick={toggleAllCompleted} >
            ❯
          </button>
          <input
            className="enterItemInput"
            value={input}
            onChange={handleInput}
            onKeyDown={addItem}
            placeholder="What needs to be done?"
          />
        </div>
        {/* Burda ise kullanmak istediğimiz propsları gönderiyoruz */}
        <ToDoList items={items} setItems={setItems} removeItem={removeItem} />
        <Footer items={items} setItems={setItems} />
      </div>
    </div>
  );
}

export default App;
