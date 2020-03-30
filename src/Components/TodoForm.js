import React, { useState } from 'react';
import "../App.css";
function TodoForm(props) {
    const [value, setValue] = useState('');

    const SubmitHandler = (e) => {
        e.preventDefault();

        if (!value) return;
        props.addTodo(value);
        setValue('');
    }
    return (
        <form onSubmit={SubmitHandler}>
            <input type="text"
                value={value}
                className="input"
                placeholder="Add todo..."
                onChange={e => setValue(e.target.value)} />
        </form>
    );
}
export default TodoForm;