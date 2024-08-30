import React from "react";

const Todo = ({id, todo, removeTodo }) => {
    const handleRemove = () => {
        removeTodo(id);
    };
    
    return (
        <ul>
            <li>{todo}
            <button onClick={handleRemove}>X</button>
            </li>
        </ul>
    )
}


export default Todo;