import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from './components/TodoList';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Build a Todo App/i)).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/add a new todo/i);
    const form = input.closest('form');

    fireEvent.change(input, { target: { value: 'Test Todo' } });
    fireEvent.submit(form);

    expect(screen.getByText(/Test Todo/i)).toBeInTheDocument();
  });

  test('toggles todo completion', () => {
    render(<TodoList />);
    const todo = screen.getByText(/Learn React/i);
    expect(todo).toHaveStyle('text-decoration: none');

    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo', () => {
    render(<TodoList />);
    const todo = screen.getByText(/Build a Todo App/i);
    const deleteButton = todo.nextSibling;

    fireEvent.click(deleteButton);
    expect(screen.queryByText(/Build a Todo App/i)).not.toBeInTheDocument();
  });
});
