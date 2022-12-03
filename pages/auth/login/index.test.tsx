import React from "react";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import Login from ".";
import { renderApp } from "../../../utils/testing";

const server = setupServer(
  rest.post("http://localhost:1337/api/auth/local", async (req, res, ctx) => {
    const data = await req.json();
    console.log(`🚀 ~ rest.post ~ req`, data);

    return res(
      ctx.json({
        jwt: "XXXXX",
        user: {
          id: 1,
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

describe("Login hook", () => {
  it("should get data from inputs and send to backend", async () => {
    renderApp(<Login />); //?

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
