import axios from 'axios';

export const FETCH_TODOS = 'FETCH_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';

const apiUrl = 'https://dummyjson.com/todos';
// data from api
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
// adding todo
export const addTodo = (todoText) => async (dispatch, getState) => {
  try {
    const randomUserId = Math.floor(Math.random() * 100) + 1;

    const TODOS = getState().todos;
    console.log('Current state TODOS:', TODOS);

    const newid = TODOS.length + 1;

    console.log('Generated ID:', newid);

    const todoItem = {
      id: newid,  
      todo: todoText,
      completed: false,
      userId: randomUserId,
    };

    // Send the todo item to the backend
    const response = await axios.post(`${apiUrl}/add`, todoItem, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('Backend response:', response.data);
    dispatch({
      type: ADD_TODO,
      payload: todoItem  
    });
  } catch (error) {
    console.error('Error adding todo:', error);
  }
};

// editing existing data
export const editTodo = (todo) => async (dispatch) => {
  console.log('editTodo action called', todo);

  try {
    const url = `${apiUrl}/${todo.id}`;
    console.log('Making PUT request to:', url)

    const response = await axios.put(
      url,
      {
        todo: todo.todo,
        completed: todo.completed,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );

    console.log('Response received:', response);

    dispatch({
      type: EDIT_TODO,
      payload: response.data, 
    });
    console.log(response.data)
  } catch (error) {
    console.error('Error editing todo:', error.message);
  }
 
};
// deletete existing todo
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