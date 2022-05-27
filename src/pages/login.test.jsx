import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./login";

describe("FormCoding", () => {
  test("renders from component login", () => {
    render(<Login />);
    expect(screen.getByText(/Welcome, Admin BCR/)).toBeInTheDocument();
    expect(screen.getByText(/Email/)).toBeInTheDocument();
    expect(screen.getByText(/Password/)).toBeInTheDocument();
    expect(screen.getByText(/Sign In/)).toBeInTheDocument();
  });

  test("input text with false value", () => {
    render(<Login />);

    //email
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "emailwrong" },
    });
    expect(screen.getByLabelText(/Email/)).toHaveValue("emailwrong@mail.com");

    //password
    fireEvent.input(screen.getByRole("textbox", { name: /password/i }), {
      target: { value: "passwordwrong" },
    });
    expect(screen.getByLabelText(/Password/)).toHaveValue("passwordwrong");
  });

  test("input text with true value", () => {
    render(<Login />);

    //email
    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "contoh1@mail.com" },
    });
    expect(screen.getByLabelText(/Email/)).toHaveValue("contoh1@mail.com");

    //password
    fireEvent.input(screen.getByRole("textbox", { name: /password/i }), {
      target: { value: "123456" },
    });
    expect(screen.getByLabelText(/Password/)).toHaveValue("123456");
  });

  test("submit button with email wrong", () => {
    render(<Login />);

    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "emailwrong@mail.com" },
    });
    //password
    fireEvent.input(screen.getByRole("textbox", { name: /password/i }), {
      target: { value: "123456" },
    });
    fireEvent.submit(screen.getByText("Submit"));
    expect(screen.getByText("Password was Wrong.")).toBeInTheDocument();
  });

  test("submit button with password wrong", () => {
    render(<Login />);

    fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "contoh1@mail.com" },
    });
    //password
    fireEvent.input(screen.getByRole("textbox", { name: /password/i }), {
      target: { value: "password wrong" },
    });
    fireEvent.submit(screen.getByText("Submit"));
    expect(screen.getByText("Password was Wrong.")).toBeInTheDocument();
  });
});
