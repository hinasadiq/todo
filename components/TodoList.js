import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, dispatch }) => {
  return (
    <ul>
      {tasks.map(task => (
        <TodoItem key={task.id} task={task} dispatch={dispatch} />
      ))}
    </ul>
  );
};

export default TodoList;
