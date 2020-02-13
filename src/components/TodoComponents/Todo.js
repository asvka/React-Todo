import React from 'react';

import styled from 'styled-components';

const ListItem = styled.div`
    text-align: left;
`

const Todo = props => {
    console.log(props);

    return (
        <ListItem
        onClick={() => props.toggleTaskComplete(props.todo.id)} >
            {props.todo.task}
        </ListItem>
    );
};
export default Todo;