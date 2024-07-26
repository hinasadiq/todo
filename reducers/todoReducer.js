const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        tasks: [...state.tasks, { id: Date.now(), text: action.payload }]
      };
    case 'REMOVE_TASK':
      return {
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    default:
      return state;
  }
};

export default todoReducer;
