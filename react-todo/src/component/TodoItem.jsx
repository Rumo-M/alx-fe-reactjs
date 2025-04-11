import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li
      onClick={() => onToggle(todo.id)}
      className={`flex justify-between items-center p-3 rounded cursor-pointer bg-gray-100 hover:bg-gray-200 transition ${
        todo.completed ? 'line-through text-gray-500' : 'text-gray-800'
      }`}
    >
      <span>{todo.text}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(todo.id);
        }}
        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
