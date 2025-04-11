import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false },
  ]);

  const addTodo = (text) => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-list max-w-md mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-3xl font-bold mb-4 text-center">Todo List</h1>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            className={`flex items-center justify-between p-3 rounded cursor-pointer shadow-sm ${
              todo.completed ? 'bg-gray-100 line-through text-gray-500' : 'bg-gray-50'
            }`}
          >
            <span>{todo.text}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteTodo(todo.id);
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
