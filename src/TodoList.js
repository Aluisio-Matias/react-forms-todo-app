import { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

const TodoList = () => {

    const [todos, setTodos] = useState([]);

    //create a new todo
    const create = newTodo => {
        setTodos(todos => [...todos, newTodo]);
    };

    //update a todo
    const update = (id, updatedTask) => {
        setTodos(todos => todos.map(todo =>
            todo.id === id ? { ...todo, task: updatedTask } : todo
        ));
    };

    //delete a todo by the id
    const remove = (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <NewTodoForm createTodo={create} />
            <ul>{todos.map(todo => <Todo
                id={todo.id}
                key={todo.id}
                task={todo.task}
                remove={remove}
                update={update} />)}</ul>
        </div>
    );
};

export default TodoList;