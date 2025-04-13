import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TodoList from "../components/TodoList"; // Ensure correct import
import "@testing-library/jest-dom"; // For better matchers like .toBeInTheDocument()

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);

    // Check if initial todos are rendered
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Write tests" } });
    fireEvent.click(addButton);

    // Check if the new todo is rendered
    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });

  test("does not add empty todo", () => {
    render(<TodoList />);

    const addButton = screen.getByText("Add");
    fireEvent.click(addButton);

    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBe(2); // Still only the initial todos
  });

  test("toggles a todo's completion", () => {
    render(<TodoList />);

    const todoItem = screen.getByText("Learn React");

    // Initially, it should not be completed
    expect(todoItem).not.toHaveStyle("text-decoration: line-through");

    // Toggle completion
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");

    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", async () => {
    render(<TodoList />);

    // Assuming there's a delete button labeled 'Delete'
    const deleteButton = screen.getByText("Delete");

    fireEvent.click(deleteButton);

    await waitFor(() => {
      expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
    });
  });
});
