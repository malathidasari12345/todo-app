import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Card, CardContent, Typography, Stack } from '@mui/material';
import { deleteTodo } from '../redux/actions/todoActions';
import EditTodo from './EditTodo';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () =>  {
    dispatch(deleteTodo(todo.id))
  }
  const handleEdit = () => {
    setIsEditing(!isEditing)
  }

  return (
    <Card 
      sx={{ 
        width: '280px',
        height:"300px",
        margin: '18px', 
        textAlign:"center",
      }}
    >
      <CardContent>
        {isEditing ?
         (
          <EditTodo todo={todo} setIsEditing={setIsEditing} />
         ) 
         :
         (
          <Stack spacing={3} alignItems="center">
            <Typography> <b>Id:</b> {todo.id }</Typography>
            <Typography> <b>Todo:</b> {todo.todo}</Typography>
            <Typography><b>Completed:</b> {todo.completed ? "Yes" : "No"}</Typography>
            <Typography> <b>UserId:</b> {todo.userId }</Typography>
            <Stack direction="row" spacing={2}>
              <Button 
                onClick={handleEdit} 
                variant="contained" 
                color="primary"
              >
                Update
              </Button>
              <Button 
                onClick={handleDelete} 
                variant="contained" 
                color="error"
              >
                Delete
              </Button>
            </Stack>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};

export default TodoItem;
