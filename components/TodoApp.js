import React, { useReducer, useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import todoReducer from '../reducers/todoReducer';

const initialState = {
  tasks: []
};

const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [taskCount, setTaskCount] = useState(0); // State to hold the task count

  // Update task count whenever tasks array changes
  React.useEffect(() => {
    setTaskCount(state.tasks.length);
  }, [state.tasks]);

  return (
    <div>
       <p>Total Tasks: {taskCount}</p>
      <h1>TODO List</h1>
      <AddTodoForm dispatch={dispatch} />
      {/* Display total task count */}
      <TodoList tasks={state.tasks} dispatch={dispatch} />
    </div>
  );
};

export default TodoApp;
