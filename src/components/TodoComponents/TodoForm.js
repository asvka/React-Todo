import React from 'react';

const TodoForm = props => {

        return (
        <form>
            <input
            value={props.value}
            type='text'
            name='todo'
            onChange={props.handleChange}
            placeholder='Enter your next task!'
            />
            <button onClick={props.addTask}> Add Task! </button>
            <button onClick={props.clearCompleted}> Clear Tasks!</button>
        </form>
        );
    }
export default TodoForm;