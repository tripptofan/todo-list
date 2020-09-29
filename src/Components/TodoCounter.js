import React from 'react';

const TodoCounter = ({ todos }) => {

    return ( 
    <div>Tasks Completed: {todos.filter(item => item.completed).length}</div>
    );
};

export default TodoCounter;