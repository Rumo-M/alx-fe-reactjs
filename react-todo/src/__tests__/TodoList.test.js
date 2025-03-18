// src/__tests__/TodoList.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../TodoList";

describe("TodoList Component", () => {
  // Initial render test
  test("renders TodoList with initial todos", () => {
    render(<TodoList />);

    // Check if initial todos are displayed
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  // Test for adding a new todo
  test("adds a new todo", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByText("Add");

    // Simulate user typing in the input field and submitting the form
    fireEvent.change(input, { target: { value: "Test new todo" } });
    fireEvent.click(addButton);

    // Check if the new todo appears in the list
    expect(screen.getByText("Test new todo")).toBeInTheDocument();
  });

  // Test for toggling a todo
  test("toggles todo completion", () => {
    render(<TodoList />);

    const todoItem = screen.getByText("Learn React");

    // Click to toggle the completion status
    fireEvent.click(todoItem);

    // Check if the todo has a line-through style (completed state)
    expect(todoItem).toHaveStyle("text-decoration: line-through");
  });

  // Test for deleting a todo
  test("deletes a todo", () => {
    render(<TodoList />);

    const deleteButton = screen.getAllByText("Delete")[0]; // Get the first delete button

    // Click delete button for the first todo
    fireEvent.click(deleteButton);

    // Check if the todo is no longer in the document
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});