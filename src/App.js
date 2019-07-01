import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

import CreateTodo from "./components/create-todo-component";
import TodosList from "./components/todos-list-component";
import Navigation from "./components/navigation-component"; 

class App extends Component {
  render() {
    return (
      <Router>
        <html>
          <div id="sitebody" className="sitebody">
            <Route path="/" component={Navigation} />
            <Route path="/" component={CreateTodo} />
            <Route path="/" exact component={TodosList} style={{margin: 50}} />
          </div>
        </html>
      </Router>
    );
  }
}

export default App;
