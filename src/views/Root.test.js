import React from "react";
import { render, screen, fireEvent, waitFor } from "test-utils";
import Root from "./Root";

describe("Root component", () => {
  it("Renders the root component as unauthenticated user", () => {
    render(<Root />);
    screen.getByLabelText("login");
  });

  it("Diplays error message when wrong credentials are passed", async () => {
    render(<Root />);
    const login = screen.getByLabelText("login");
    const password = screen.getByLabelText("password");

    fireEvent.change(login, { target: { value: "Low" } });
    fireEvent.change(password, { target: { value: "Low" } });

    fireEvent.click(screen.getByText("Sign in"));

    await waitFor(() => screen.getByText(/Oops/));
  });

  it("Diplays authenticated aplication", async () => {
    render(<Root />);
    const login = screen.getByLabelText("login");
    const password = screen.getByLabelText("password");

    fireEvent.change(login, { target: { value: "teacher@studybuddy.com" } });
    fireEvent.change(password, { target: { value: "Test123" } });

    fireEvent.click(screen.getByText("Sign in"));

    await waitFor(() => screen.getByText(/Lowell/));
  });
});
