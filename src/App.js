import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateTodo from './components/CreateTodo';
import EditTodo from './components/EditTodo';
import TodosList from './components/TodosList';
import NavBar from './components/NavBar'

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      {/* <h1>Your Todo List Today</h1> */}
        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
    </div>
    </Router>
  );
}

export default App;
