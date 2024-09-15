import React from 'react';
import { Container, Typography } from '@mui/material';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Header from './components/Header';

const App = () => {
  return (
    <>
     <center>
         <h1 style ={{color:"blue"}}>TODO APPLICATION</h1>
     </center>
     {/* <Header/> */}
      <Container className="App" sx={{ marginTop: 4 }}>
        <AddTodo />
        <br />
        <TodoList />
      </Container>
    </>
  );
};

export default App;
