import React, { component } from 'react';
import './App.css';
import toDo from './components/ToDo.js';

class ToDo extends component {
  render() {
    return  (
      <div className="App">
        <ul>
          <ToDo />
          <ToDo />
        </ul>
    );
  }
}

export default ToDo;
