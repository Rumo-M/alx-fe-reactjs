import React from 'react';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li
      onClick={onToggle}
      className={`flex justify-between items-center p-2 bg-white shadow rounded cursor-pointer ${
        todo.completed ? 'line-through text-gray-500' : ''
      }`}
    >
      {todo.text}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
