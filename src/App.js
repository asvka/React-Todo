import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

import styled from 'styled-components';

const Header = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Permanent Marker', cursive;
`
const AppContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [
        {
          task: 'Drink coffee',
          id: 1234,
          completed: false
        },
        {
          task: 'Lift weights before work',
          id: 1233,
          completed: false
        },
        {
          task: 'Commute to work',
          id: 4567,
          completed: false
        },
        {
          task: 'Check emails and open purchase orders',
          id: 45678,
          completed: false
        },
        {
          task: 'Receive all ordered products and put new inventory away',
          id: 456789,
          completed: false
        },
        {
          task: 'Write orders',
          id: 345678,
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
    let todos = this.state.todos.slice();
    todos = todos.map(todo => {
        if (todo.id === id){
          todo.completed = !todo.completed;
          return todo;
        } else {
          return todo;
        }
      });
      this.setState({ todos });

  //   this.setState({tasks: this.state.todos.map(todo => {
  //     if (todo.id === todoId) {
  //       return {
  //         ...todo,
  //         completed: !todo.completed
  //       };
  //     }
  //     return todo;
  //   })
  // });
};


  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({todos: this.state.todos.filter(todo => {
      // if (todo.id === todo.id) {
      //   return {
      //     ...todo,
      //     completed: !todo.completed
      //   }
      // }


      return !todo.completed;
    })
    })


    // let todos = this.state.todos.filter (todo => !todo.completed);
    // this.setState({ todos });

    // console.log(this.state.todo);
    // this.setState({
    //   todos: this.state.todo.filter(todo => todo.completed === false)
    // });
    // console.log(this.state.todo)
  }


  render() {
    return (
      <AppContainer>
        <Header>Let's get ish done!</Header>
        <div>
          <TodoForm
          addTask={this.addTask}
          handleChange={this.handleChanges}
          value={this.state.todo}
          clearCompleted={this.clearCompleted}
          />
        </div>
        <div>
          <TodoList
            todos={this.state.todos}
            toggleTaskComplete={this.toggleTaskComplete}
            clearCompleted={this.clearCompleted}
          />
        </div>

      </AppContainer>
    );
  }
}

export default App;
