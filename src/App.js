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
          task: 'Check emails and open purchase orders',
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
      // todo: ''
    };
  }
  addTask = e => {
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

  handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value});
    };

  toggleTaskComplete = id => {
    console.log(id);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (id === todo.id){
          todo.completed = !todo.completed;
          return todo;
        } else {
          return todo;
        }
      })
    })
  }

  clearCompleted = e => {
    e.preventDefault();
    console.log(this.state.todo);
    this.setState({
      todos: this.state.todo.filter(task => task.completed === false)
    });
    console.log(this.state.todo)
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
          <TodoForm
          addTask={this.addTask}
          handleChange={this.handleChanges}
          value={this.state.todo} />
        </div>
        <div>
          <TodoList
            todos={this.state.todos}
            toggleTaskComplete={this.toggleTaskComplete}
          />
        </div>

      </div>
    );
  }
}

export default App;
