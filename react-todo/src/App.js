import React from 'react';
import TodoList from './TodoList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        My Todo Application
      </h1>
      <TodoList />
    </div>
  );
}

export default App;
