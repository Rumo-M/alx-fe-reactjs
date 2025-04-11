import React from 'react';
import TodoList from './TodoList';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Todo Application</h1>
      <TodoList />
    </div>
  );
}

export default App;
