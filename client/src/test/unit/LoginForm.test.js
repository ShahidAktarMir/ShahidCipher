// Import necessary dependencies and components
import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "../../components/Auth/Login";

// Write test cases
describe("LoginForm", () => {
  test("renders login form", () => {
    render(<Login />);
    const emailInput = screen.getByLabelText("Email");
    expect(emailInput).toBeInTheDocument();
  });
});
