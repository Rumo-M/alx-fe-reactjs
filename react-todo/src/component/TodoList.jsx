import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm'; // Ensure this path is correct

function TodoList() {
  // State to manage the list of todos
  const [todos, setTodos] = useState([
    { text: 'Learn React', completed: false },
    { text: 'Build a Todo App', completed: false },
  ]);

  // Function to add a new todo
  const addTodo = (todo) => {
    setTodos([...todos, { text: todo, completed: false }]);
  };

  // Function to delete a todo by index
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.text}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <AddTodoForm onAdd={addTodo} />
    </div>
  );
}

export default TodoList;
