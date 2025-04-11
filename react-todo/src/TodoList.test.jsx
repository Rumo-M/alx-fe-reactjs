// TodoList.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

// Test if the TodoList component renders correctly
test('renders TodoList component with initial todos', () => {
  render(<TodoList />);
  
  // Check if the Todo List title is rendered
  expect(screen.getByText('Todo List')).toBeInTheDocument();

  // Check if the initial todos are rendered
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
});

// Test if a new todo can be added
test('adds a new todo', () => {
  render(<TodoList />);
  
  // Find the input and add a new todo
  const input = screen.getByPlaceholderText('Add a new todo');
  fireEvent.change(input, { target: { value: 'New Todo' } });
  
  // Find the Add button and click it
  const addButton = screen.getByText('Add');
  fireEvent.click(addButton);
  
  // Check if the new todo appears in the list
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

// Test if a todo can be deleted
test('deletes a todo', () => {
  render(<TodoList />);
  
  // Add a new todo first
  const input = screen.getByPlaceholderText('Add a new todo');
  fireEvent.change(input, { target: { value: 'New Todo' } });
  const addButton = screen.getByText('Add');
  fireEvent.click(addButton);
  
  // Find the new todo and the delete button
  const newTodo = screen.getByText('New Todo');
  const deleteButton = newTodo.nextSibling;  // The button is right next to the todo text
  
  // Click the delete button
  fireEvent.click(deleteButton);
  
  // Check that the new todo is no longer in the document
  expect(screen.queryByText('New Todo')).not.toBeInTheDocument();
});
