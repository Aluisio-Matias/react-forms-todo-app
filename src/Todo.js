import { useState } from 'react';

const Todo = ({ task = 'default todo', id = "1", remove, update }) => {
    const [editTask, setEditTask] = useState(task);
    const [isEditing, setIsEditing] = useState(false);

    const toggleEdit = () => {
        setIsEditing(edit => !edit);
    };

    const handleChange = evt => {
        setEditTask(evt.target.value);
    };

    const handleDelete = () => remove(id);

    const handleUpdate = evt => {
        evt.preventDefault();
        update(id, editTask);
        setIsEditing(false);
    };

    let defaultView = (

        <div>
            <ul className="list-group">
                <li className="list-group-item w-50">{task}</li>
            </ul>
            <button onClick={toggleEdit} className="btn btn-warning btn-sm">Edit</button>
            <button onClick={handleDelete} className="btn btn-dark btn-sm">X</button>
        </div>
    );

    if (isEditing) {
        defaultView = (
            <div>
                <form onSubmit={handleUpdate}>
                    <div className="col-sm-4">
                        <input
                            className="form-control"
                            type="text"
                            value={editTask}
                            onChange={handleChange}
                        />
                    </div>
                    <button className="btn btn-success btn-sm">Update</button>
                </form>
            </div>
        );
    }
    return defaultView;
}

export default Todo