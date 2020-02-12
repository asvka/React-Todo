import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [
        {
          task: 'Drink coffee',
          id: Date.now(),
          completed: false
        },
        {
          task: 'Lift weights before work',
          id: Date.now(),
          completed: false
        },
        {
          task: 'Commute to work',
          id: Date.now(),
          completed: false
        },
        {
          task: 'Check emails and current purchase orders',
          id: Date.now(),
          completed: false
        },
        {
          task: 'Receive all ordered products and put new inventory away',
          id: Date.now(),
          completed: false
        },
        {
          task: 'Write orders',
          id: Date.now(),
          completed: false
        }
      ],
      todo: ''
    };
  }
  addTask = (e, task) => {
    e.preventDefault();

    const newTask = {
      task: this.state.todo,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTask],
      todo: ''
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
          <TodoForm addTask={this.addTask} />
        </div>
        <div>
          <TodoList 
            todos={this.state.todos}
          />
        </div>

      </div>
    );
  }
}

export default App;
