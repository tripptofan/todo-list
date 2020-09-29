import React from 'react';
import moment from 'moment';

const TodoItem = ({ todoItem, toggleCompleted, removeTodo}) => {


    return(
        <div unselectable='on' className='todoItem' id={todoItem.completed ? 'itemCompleted' : 'itemNotCompleted'}>
            <p id='task'>{todoItem.task}</p>
            <div id='todoItemBottom'>
            <div id='todoButtons'>
            <button id='completeTodo' onClick={() => toggleCompleted(todoItem.id)}>Done</button>
            <button id='removeTodo' onClick={() => removeTodo(todoItem.id)}>Remove</button>
            </div>
            <div id='creationDate'>{moment(todoItem.creationDate).fromNow()}</div>
            </div>
        </div>
    )
}

export default TodoItem;