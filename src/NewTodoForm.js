import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

function NewTodoForm({ createTodo }) {
    const [task, setTask] = useState("");

    const handleChange = evt => {
        setTask(evt.target.value);
    };

    const gatherInput = evt => {
        evt.preventDefault();
        createTodo({ task, id: uuid() });
        setTask("");
    };

    return (
        <div>
            <h1 className="display-5 my-3">Todo App</h1>
            <form onSubmit={gatherInput}>
                <div className="col-sm-4">
                    <label htmlFor="task" className="col-sm-2 col-form-label">Task:</label>
                    <input
                        className="form-control"
                        id="task"
                        name="task"
                        type="text"
                        onChange={handleChange}
                        value={task}
                        placeholder="Enter your todo"
                        required
                    />
                </div>
                <button className="btn btn-success my-3">Add a todo</button>
            </form>
        </div>
    );
}

export default NewTodoForm;