import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList'; // Make sure this import path is correct for your project

test('renders default todos', () => {
  render(<TodoList />);

  // Ensure the default todos are rendered
  expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  expect(screen.getByText(/Build a Todo App/i)).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);

  // Access input and button elements
  const input = screen.getByPlaceholderText(/add a new todo/i);
  const addButton = screen.getByText(/add/i);

  // Simulate typing into the input field and clicking the "Add" button
  fireEvent.change(input, { target: { value: 'Write tests' } });
  fireEvent.click(addButton);

  // Verify the new todo appears in the list
  expect(screen.getByText(/Write tests/i)).toBeInTheDocument();
});

test('deletes a todo', () => {
  render(<TodoList />);

  // Find the todo item to be deleted by its text
  const todoItem = screen.getByText(/Build a Todo App/i);
  
  // Find the delete button associated with that todo item
  const deleteButton = screen.getByText(/Delete/i);

  // Click the delete button
  fireEvent.click(deleteButton);

  // After deletion, the todo should no longer be in the document
  expect(screen.queryByText(/Build a Todo App/i)).not.toBeInTheDocument();
});
