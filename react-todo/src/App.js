// App.jsx
import React from 'react';
import TodoList from './TodoList'; // Ensure this is the correct path to TodoList

function App() {
  return (
    <div className="App">
      <h1>My Todo Application</h1>
      <TodoList />  {/* Rendering the TodoList component */}
    </div>
  );
}

export default App;