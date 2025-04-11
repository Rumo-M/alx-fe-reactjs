import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';

function TodoList() {
  const [todos, setTodos] = useState([
    { text: 'Learn React', completed: false },
    { text: 'Build a Todo App', completed: false },
  ]);

  const addTodo = (text) => {
    if (text.trim()) {
      setTodos([...todos, { text, completed: false }]);
    }
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
    <div className="todo-list">
      <h1 className="text-3xl font-semibold mb-4">Todo List</h1>
      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => toggleTodo(index)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
            className="flex items-center justify-between"
          >
            <span>{todo.text}</span>
            <button
              onClick={(e) => {
                deleteTodo(index);
              }}
              className="text-red-500 hover:text-red-700"
            >
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
