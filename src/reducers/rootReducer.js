import axios from 'axios';

const initState = {
  todos: []
}

const rootReducer = (state = initState, action) => {
  if (action.type === 'INITIALIZE_DATA') {
    return {
      action
    }
  }

  if (action.type === 'ADD_TODO') {
    axios.post('http://localhost:4000/todos/add', newTodo)
         .then(res => console.log(res.data));
  }

  if (action.type === 'UPDATE_TEXT') {
    let newText = action.text;
    return {
      ...state,
      text: newText
    }
  }

  if (action.type === 'DELETE_POST') {
    let newTodos = state.todos.filter(todoEntry => {
      return action.id !== todoEntry.id
    })

    return {
      ...state,
      todos: newTodos
    }
  }
  return state;
}

export default rootReducer
