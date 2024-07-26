import React from 'react';

const TodoItem = ({ task, dispatch }) => {
  const handleRemoveTask = () => {
    dispatch({ type: 'REMOVE_TASK', payload: task.id });
  };

  return (
    <li>
      {task.text}
      <button onClick={handleRemoveTask}>Remove</button>
    </li>
  );
};

export default TodoItem;
