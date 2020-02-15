import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

const TodoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: left;
    font-family: 'Gupter', serif;
    background: black;
    color: grey;
    width: 400px;
    margin: 2%;
    padding: 2%;
    border: 1px dashed grey;
    border-radius: 10px;
`

const TodoList = props => {
    console.log('TodoList: ', props);
    return(
        <TodoContainer>
            {props.todos.map(todo => (
                <p>
                <Todo
                key={todo.id}
                todo={todo}
                toggleTaskComplete={props.toggleTaskComplete}
                />
                </p>
            ))}
        </TodoContainer>
    )
}
export default TodoList;