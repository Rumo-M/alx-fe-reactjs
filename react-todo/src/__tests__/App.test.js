// App.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App"; // adjust the path if needed
import "@testing-library/jest-dom";

test("renders the TodoList in the App", () => {
  render(<App />);

  // Check the heading
  expect(screen.getByText("My Todo App")).toBeInTheDocument();

  // Check that initial todos render
  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
});
