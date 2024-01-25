import { useState } from 'react';
import './App.css';
// import {ListItem} from "./ListItem"

const App = () => {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    setItem(event.target.value);
  };

  const handleAdd = () => {
    // Avoid adding empty items
    if (item.trim() !== "") {
      setItems((prevItems) => [...prevItems, item]);
      setItem(""); // Clear the input after adding the item
    }
  };

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent the default behavior (e.g., form submission)
      handleAdd();
    }
  };
  
  
  
  return (
    <>
      <h1>To-Do List</h1>
      <div className="input">
        <input value={item} onChange={handleChange} onKeyPress={handleEnter}></input>

        <button onClick={handleAdd}>Add</button>
      </div>

      {items.map((toDo, index) => (
        <p key={index}>{toDo}</p>
      ))}
    </>
  );
};

export default App;
