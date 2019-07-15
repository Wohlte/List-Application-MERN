import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';

import CreateTodo from "./components/create-todo-component";
import About from "./components/about"

class App extends Component {
  render() {
    return (
      <Router>
        <html>
          <div id="sitebody" className="sitebody">
            <center>
              <a class="siteheader" href="/home">HOME</a>
              <a class="siteheader" href="/about">ABOUT</a>
            </center>
            <Route path="/home" component={CreateTodo} />
            <center><Route path="/about" component={About} /></center>
          </div>
        </html>
      </Router>
    );
  }
}

export default App;
