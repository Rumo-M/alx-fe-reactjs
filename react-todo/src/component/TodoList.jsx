import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';

function TodoList() {
  const [todos, setTodos] = useState([
    { text: 'Learn React', completed: false },
    { text: 'Build a Todo App', completed: false },
  ]);

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => toggleTodo(index)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
            <button onClick={(e) => {
              e.stopPropagation();
              deleteTodo(index);
            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <AddTodoForm onAdd={addTodo} />
    </div>
  );
}

export default TodoList;
