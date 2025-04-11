import React from 'react'; // 👈 Add this
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders TodoList component', () => {
    render(<App />);

    // Check if the TodoList component is rendered
    const todoListElement = screen.getByText(/Todo List/i); // You should adjust the text if necessary

    // Ensure TodoList is present in the document
    expect(todoListElement).toBeInTheDocument();
  });
});
