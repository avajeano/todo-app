import React, { useState } from "react";

const TodoListForm = ({addTodo}) => {
    const INITIAL_STATE = {
        todo: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name] : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo({...formData});
        setFormData(INITIAL_STATE);
    }

    

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">Todo</label>
            <input id="todo" name="todo" type="text" placeholder="Todo" value={formData.todo} onChange={handleChange}/>
            <button>Add Todo</button>
        </form>
    )
}

export default TodoListForm;