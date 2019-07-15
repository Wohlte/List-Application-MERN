import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Todo = props => (
  <tr className="todoEntry">
    <td className="todoEntry">{props.todo.todo_description}</td>
    <td className="todoEntry">{props.todo.todo_priority}</td>
  </tr>
)

export default class CreateTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: '',
            todo_priority: 'Low',
            todo_completed: false,
            todos: []
        }
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

    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        })
    }

    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        })
    }

    onSubmit(e) {
        console.log(`Form submitted: `);
        console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Description: ${this.state.todo_priority}`);
        console.log(`Todo Description: ${this.state.todo_completed}`);

        const newTodo = {
          todo_description: this.state.todo_description,
          todo_priority: this.state.todo_priority,
          todo_completed: this.state.todo_completed
        }

        axios.post('http://localhost:4000/todos/add', newTodo)
             .then(res => console.log(res.data));

        this.setState({
            todo_description: '',
            todo_priority: 'Low',
            todo_completed: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>

                <br />
                <br />
                <form onSubmit={this.onSubmit}>
                        <input type="text"
                               value={this.state.todo_description}
                               onChange={this.onChangeTodoDescription}
                               />
                <br />
                <br />

                  <div className="form-group">
                    <div className="form-check">
                        <input type="radio"
                               className="form-check-input"
                               name="priorityOptions"
                               id="priorityLow"
                               value="Low"
                               checked={this.state.todo_priority === "Low"}
                               onChange={this.onChangeTodoPriority}
                               />
                             <label className="form-check-label">Low</label>


                        <input type="radio"
                               className="form-check-input"
                               name="priorityOptions"
                               id="priorityMedium"
                               value="Medium"
                               checked={this.state.todo_priority === "Medium"}
                               onChange={this.onChangeTodoPriority}
                               />
                             <label className="form-check-label">Medium</label>

                        <input type="radio"
                               className="form-check-input"
                               name="priorityOptions"
                               id="priorityHigh"
                               value="High"
                               checked={this.state.todo_priority === "High"}
                               onChange={this.onChangeTodoPriority}
                               />
                        <label className="form-check-label">High</label>
                      </div>
                    </div>
                    <br />


                    <div className="form-group"
>                       <input type="submit" vaue="Create Todo" className="button" />
                    </div>

                </form>
                <div>
                    <table className="todosTable" style={{marginTop:40, marginBottom:40}}>
                      <tbody>
                        {this.todoList() }
                      </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
