import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
  <tr className="todoEntry">
    <td className="todoEntry">{props.todo.todo_description}</td>
    <td className="todoEntry">{props.todo.todo_priority}</td>
    <td className="todoEntry">
      <Link to={"/edit/"+props.todo._id}>Edit</Link>
    </td>
  </tr>
)

export default class TodosList extends Component {

    constructor(props) {
      super(props);
      this.state = {todos: []};
    }

    componentDidMount() {
      axios.get('http://localhost:4000/todos/')
           .then(response => {
             this.setState({todos: response.data});
           })
           .catch(function (error) {
             console.log(error);
           })
    }

    todoList() {
      return this.state.todos.map(function(currentTodo, i) {
        return <Todo todo={currentTodo} key={i} />;
      });
    }

    render() {
        return (
            <div>
                <table className="todosTable" style={{marginTop:40, marginBottom:40}}>
                  <tbody>
                    {this.todoList() }
                  </tbody>
                </table>
            </div>
        )
    }
}
