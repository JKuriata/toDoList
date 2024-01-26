import React from 'react';


export const ListItem = ({ toDo, onRemove }) => {
  const handleRemove = () => {
    onRemove(toDo);
  };

  return (
    <div>
      <p>{toDo}</p>
      <button onClick={handleRemove}>Delete</button>
    </div>
  );
};
