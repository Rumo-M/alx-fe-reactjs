function TodoList() {
  const [todos, setTodos] = useState([
    { text: 'Learn React', completed: false },
    { text: 'Build a Todo App', completed: false },
  ]);

  const addTodo = (todo) => {
    setTodos([...todos, { text: todo, completed: false }]);
  };

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
