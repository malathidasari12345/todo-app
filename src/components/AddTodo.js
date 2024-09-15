import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Grid, Box } from '@mui/material';
import { addTodo } from '../redux/actions/todoActions';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      mt={4}  
      mx={4}
    >
      <form onSubmit={handleSubmit}>
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} sm={8}>
            <TextField
              label="Add Todo"
              variant="outlined"
              value={text}
              onChange={handleChange}
              sx={{ width: { xs: '100%', sm: '400px' } }}  
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ width: { xs: '100%', sm: '150px', padding : '10px' } }} 
            >
              Add Todo
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default AddTodo;
