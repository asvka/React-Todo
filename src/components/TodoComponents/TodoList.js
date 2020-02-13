import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    console.log('TodoList: ', props);
    return(
        <div className='todo-list'>
            {props.todos.map(todo => (
                <Todo
                key={todo.id}
                todo={todo}
                toggleTaskComplete={props.toggleTaskComplete}
                />
            ))}
        </div>
    )
}
export default TodoList;