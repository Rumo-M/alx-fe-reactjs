import React from 'react';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
