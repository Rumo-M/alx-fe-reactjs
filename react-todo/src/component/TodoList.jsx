import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

test('renders TodoList component', () => {
  render(<TodoList />);
  expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
  expect(screen.getByText('Learn React')).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  const addButton = screen.getByText(/Add Todo/i);
  fireEvent.click(addButton);
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('does not show deleted todo', () => {
  render(<TodoList />);
  const addButton = screen.getByText(/Add Todo/i);
  fireEvent.click(addButton);
  const newTodo = screen.getByText('New Todo');
  const deleteButton = newTodo.nextSibling;
  fireEvent.click(deleteButton);
  expect(screen.queryByText('New Todo')).not.toBeInTheDocument();
});

