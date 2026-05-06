import './App.css';
import React, { Fragment } from 'react';

// COmponents
import InputTodo from './components/inputToDo';
import ListToDos from './components/listToDo';

function App() {
  return <Fragment>
        <div class="container">
        <InputTodo />
        <ListToDos />
        </div>
    </Fragment>
    }

export default App;
