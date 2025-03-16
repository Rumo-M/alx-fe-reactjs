import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

test('renders Todo List component', () => {
  render(<TodoList />);
  const todoList = screen.getByText(/Todo List/i);
  expect(todoList).toBeInTheDocument();
});

test('renders initial todos', () => {
  render(<TodoList />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
  expect(screen.getByText('Build Todo App')).toBeInTheDocument();
});

test('adds a new todo', () => {
  render(<TodoList />);
  fireEvent.click(screen.getByText(/Add Todo/i));
  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('toggles todo completion', () => {
  render(<TodoList />);
  const todo = screen.getByText('Learn React');
  fireEvent.click(todo);
  expect(todo).toHaveStyle('text-decoration: line-through');
  fireEvent.click(todo);
  expect(todo).toHaveStyle('text-decoration: none');
});

test('deletes a todo', () => {
  render(<TodoList />);
  const todo = screen.getByText('Learn React');
  const deleteButton = screen.getByText(/Delete/i);
  fireEvent.click(deleteButton);
  expect(todo).not.toBeInTheDocument();
});