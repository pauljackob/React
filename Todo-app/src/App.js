import React, { Component } from 'react';
import './App.css';



class App extends Component {
    constructor () {
      super ();
      this.state = {
        message: 'Todo list',
        newTodo:'',
        todos: [
          {
            "id": 1,
            "description": "Get out of bed",
            "deadline": "2017-09-11",
            "done": true
          },
          {
            "id": 2,
            "description": "Brush teeth",
            "deadline": "2017-09-10",
            "done": false
          },
          {
            "id": 3,
            "description": "Eat breakfast",
            "deadline": "2017-09-09",
            "done": false
          }
        ]
      };
    }
  
    newTodoChange (event) {
      this.setState ({
        newTodo : event.target.value
      });
    }

    formSubmitted (event) {
    event.preventDefault ();
    this.setState ({
      newTodo: '',
      todos:[...this.state.todos, {
        description: this.state.newTodo,
        deadline: this.state.newTodo,
        done: false
      }] 
    });
    }
 
    toggelToDoDone (event, index) {
      const todos = [... this.state.todos];
      todos[index] = {...todos[index]};
      todos[index].done = event.target.checked;
      this.setState ({
        newTodo: '',
        todos 
      });
    }


    removeTodo(index) {
      const todos = [ ...this.state.todos];
      todos.splice(index, 1)
      this.setState ({
        todos
      });
    }


    render () {
      return (
        <div className="App">
          <h1>{this.state.message}</h1>
          <form onSubmit={this.formSubmitted.bind(this)}>
            <label htmlFor="newTodo">New Todo</label>
            <input onChange={this.newTodoChange.bind(this)} value={this.state.newTodo}/>
            <button type="submit">Add Todo</button>
          </form>
          <ul>
            {this.state.todos.map((todo, index ) => {
              return (<li key = {todo.description}>
                <input onChange={(event) => this.toggelToDoDone(event, index)} type="checkbox" checked={todo.done}/>
                <span className={ todo.done ? 'done' : ''}>{todo.description}{' '}{todo.deadline}</span>
                <button onClick={() => this.removeTodo(index)}>Remove</button>
                </li>)
            })}
          </ul>
        </div>
    );
  }
}

export default App;
