import { ADD_TODO, DELETE_TODO, EDIT_TODO, FETCH_TODOS } from '../actions/todoActions';

const initialState = {
  todos: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS:
      return {
        ...state,
        todos: action.payload
      };

    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };

    case EDIT_TODO:
      console.log('Before:', state.todos); 
      const updatedTodos = state.todos.map(todo =>
        todo.id === action.payload.id ? action.payload : todo
      );
      console.log('After:', updatedTodos);  
      return {
        ...state,
        todos: updatedTodos
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };

    default:
      return state;
  }
};

export default todoReducer;
