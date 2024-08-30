import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import TodoListForm from "./TodoListForm";
import Todo from "./Todo";

const TodoList = () => {
    const INITIAL_STATE = [{id: uuid(), todo: ''}]
    const [todos, setTodos] = useState(INITIAL_STATE);
    const addTodo = (newTodo) => {
        setTodos(todos => [...todos, {...newTodo, id:uuid()}])
    }
    const removeTodo = (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
    }
    return (
        <div>
            <h2>Todo List</h2>
            <TodoListForm addTodo={addTodo} />
            <div>
                {todos.map(todo => (
                    <Todo key={todo.id} id={todo.id} todo={todo.todo} removeTodo={removeTodo}/>
                ))}
            </div>
        </div>
    )
}

export default TodoList;