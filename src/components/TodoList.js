import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import { useSelector,useDispatch } from 'react-redux';
import { Container } from '@mui/material';
import { fetchTodos } from '../redux/actions/todoActions';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  useEffect(() => {
    dispatch(fetchTodos()); 
  }, [dispatch]); 

  return (
    <Container sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Container>
  );
};

export default TodoList;
