import React, { useState } from 'react';

function AddTodoForm({ onAdd }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 my-4">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
        className="flex-grow p-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  );
}

export default AddTodoForm;
