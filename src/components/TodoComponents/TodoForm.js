import React from 'react';
import styled from 'styled-components';

const TodoFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Gupter', serif;
`

const TodoForm = props => {

        return (
        <TodoFormContainer>
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
        </TodoFormContainer>
        );
    }
export default TodoForm;