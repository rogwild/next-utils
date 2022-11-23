import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "./index";
import { Provider } from "react-redux";
import store from "../../../redux";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.post("http://localhost:1337/api/auth/local", async (req, res, ctx) => {
    const data = await req.json();
    console.log(`🚀 ~ rest.post ~ req`, data);

    return res(
      ctx.json({
        jwt: "XXXXX",
        user: {
          id: 8,
        },
      })
    );
  })
);

beforeAll(() => {
  server.listen({});
});
afterEach(() => server.resetHandlers());
afterAll(() => {
  server.close();
});

describe("Login hook and inputs", () => {
  it.only("should get data and send to backend", async () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const emailInput = screen.getByPlaceholderText(/type your email/i);
    const passwordInput = screen.getByPlaceholderText(/type your password/i);

    fireEvent.change(emailInput, { target: { value: "tester@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "Password123!" } });
    fireEvent.click(
      screen.getByRole("button", {
        name: /login/i,
      })
    );

    expect(
      await waitFor(() =>
        screen.getByRole("heading", {
          name: /you are logged in/i,
        })
      )
    ).toBeInTheDocument();
  });
});
