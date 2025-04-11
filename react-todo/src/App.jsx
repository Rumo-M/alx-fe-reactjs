import React, { useState } from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    { text: 'Learn React', completed: false },
    { text: 'Build a Todo App', completed: false },
  ]);

  const addTodo = (todo) => {
    if (todo.trim() === '') return;
    setTodos([...todos, { text: todo, completed: false }]);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800 p-4">
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-900 shadow-md rounded p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-100 mb-4">
          React Todo App
        </h1>
        <AddTodoForm onAdd={addTodo} />
        <TodoList todos={todos} onDelete={deleteTodo} onToggle={toggleTodo} />
      </div>
    </div>
  );
}

export default App;
