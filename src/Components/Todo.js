import React, { useState } from 'react';
import "../App.css";
function Todo(props) {
    return (
        <div style={{ textDecoration: props.todo.isCompleted ? "line-through" : '' }} className="Todo">
            {props.todo.text}
            <div>
                <button className="buttons" onClick={() => props.CompleteTodo(props.index)}>
                    Complete
                </button>
                <button className="buttons" onClick={() => props.deleteTodo(props.index)}>
                    x
                </button>
            </div>
        </div>
    );
}
export default Todo;