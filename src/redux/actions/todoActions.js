import axios from 'axios';

export const FETCH_TODOS = 'FETCH_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';

const apiUrl = 'https://dummyjson.com/todos';

export const fetchTodos = () => async dispatch => {
  try {
    const response = await axios.get(apiUrl);

    console.log('Response data:', response.data);

    dispatch({
      type: FETCH_TODOS,
      payload: response.data.todos
    });
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
};

export const addTodo = (todoText) => async dispatch => {
  try {
    const randomUserId = Math.floor(Math.random() * 100) + 1;
    
    const response = await axios.post(`${apiUrl}/add`, {
      todo: todoText,
      completed: false,
      userId:  randomUserId,
    });
    console.log(response)

    dispatch({
      type: ADD_TODO,
      payload: response.data
    });
  } catch (error) {
    console.error('Error adding todo:', error);
  }
};

export const editTodo = (todo) => async dispatch => {
  console.log('editTodo action called', todo);
  try {
    const url = `${apiUrl}/${todo.id}`;
    console.log('Making PUT request to:', url);
    
    const response = await axios.put(url,{
      todo: todo.todo, 
      completed: todo.completed
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('Response received:', response.data);
    
    dispatch({
      type: EDIT_TODO,
      payload: response.data  
    });
  } catch (error) {
    console.error('Error editing todo:', error.message);
  }
};

export const deleteTodo = (id) => async dispatch => {
  try {
    const response = await axios.delete(`${apiUrl}/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('Response received after deletion:', response.data);

    dispatch({
      type: DELETE_TODO,
      payload: id
    });
  } catch (error) {
    console.error('Error deleting todo:', error.message);
  }
};