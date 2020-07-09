import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders title", () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Kairos Todo List/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders submit button", () => {
  render(<App />);
  const submitButton = screen.getByRole("button", { name: /submit/i });
  expect(submitButton).toBeInTheDocument();
});

test("It should allow users to input in the text box ", () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/add todo/i);
  fireEvent.change(input, { target: { value: "Feed pets" } });
  expect(input.value).toBe("Feed pets");
});
