import React from 'react';
import moment from 'moment';

const TodoItem = ({ todoItem, toggleCompleted, removeTodo}) => {


    return(
        <div  className={todoItem.completed ? 'todoItemCompleted' : 'todoItemNotCompleted'} id={todoItem.id}>
            <p id='task'>{todoItem.task}</p>
            <div id='todoItemBottom'>
            <div id='todoButtons'>
            <button id='completeTodo' onClick={() => toggleCompleted(todoItem.id)}>{todoItem.completed ? 'Undo' : 'Done'}</button>
            <button id='removeTodo' onClick={() => removeTodo(todoItem.id)}>Remove</button>
            </div>
            <div id='creationDate'>{moment(todoItem.creationDate).fromNow()}</div>
            </div>
        </div>
    )
}

export default TodoItem;