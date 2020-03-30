import React, { useState } from 'react';
function Todo(props) {
    return (
        <div className="Todo">
            {props.todo.text}
        </div>
    );
}
export default Todo;