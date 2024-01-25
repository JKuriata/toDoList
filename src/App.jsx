import { useState } from 'react';
import './App.css';

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

  return (
    <>
      <h1>To-Do List</h1>
      <div className="input">
        <input value={item} onChange={handleChange}></input>
        <button onClick={handleAdd}>Add</button>
      </div>
      {items.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
    </>
  );
};

export default App;
