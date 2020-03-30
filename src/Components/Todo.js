import React, { useState } from 'react';
import "../App.css";
function Todo(props) {
    return (
        <div className="Todo">
            {props.todo.text}
        </div>
    );
}
export default Todo;