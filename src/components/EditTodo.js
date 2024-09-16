import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, FormControl, FormControlLabel, Checkbox, FormGroup } from '@mui/material';
import { editTodo } from '../redux/actions/todoActions';

const EditTodo = ({ todo, setIsEditing }) => {
  const [text, setText] = useState(todo.todo);
  const [completed, setCompleted] = useState(todo.completed);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(editTodo({
      ...todo,
      id,
      todo: text,
      completed
    }));
    setIsEditing(false);
  };

  return (
    <div>
      <TextField
        label="Todo"
        variant="outlined"
        value={text}
        onChange={(e) => setText(e.target.value)}
        fullWidth
        margin="normal"
      />
      <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={completed}
                onChange={(e) => setCompleted(e.target.checked)}
              />
            }
            label="Completed"
          />
        </FormGroup>
      </FormControl>
      <div style={{ margin: '16px 0' }}></div> 
      <Button onClick={handleSave} variant="contained" color="primary">
        Save
      </Button>
    </div>
  );
};

export default EditTodo;
