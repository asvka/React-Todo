import React from 'react';

const Todo = props => {
    console.log(props);

    return (
        <div
        onClick={props.toggleTaskComplete}>
            {props.todo.task}
        </div>
    )
};
export default Todo;