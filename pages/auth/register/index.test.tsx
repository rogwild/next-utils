import React from "react";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import Register from "./index";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { renderApp } from "~utils/testing";

const server = setupServer(
  rest.post(
    "http://localhost:1337/api/auth/local/register",
    async (req, res, ctx) => {
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
    }
  )
);

beforeAll(() => {
  server.listen({});
});

afterEach(() => server.resetHandlers());

afterAll(() => {
  server.close();
});

describe("Register hook", () => {
  it("should get data from inputs and send to backend", async () => {
    renderApp(<Register />);

    const usernameInput = screen.getByPlaceholderText(/type your username/i);
    const emailInput = screen.getByPlaceholderText(/type your email/i);
    const passwordInput = screen.getByPlaceholderText(/type your password/i);
    const confirmPasswordInput =
      screen.getByPlaceholderText(/repeat your password/i);

    fireEvent.change(usernameInput, { target: { value: "tester" } });
    fireEvent.change(emailInput, { target: { value: "tester@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "Password123!" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "Password123!" },
    });
    fireEvent.click(
      screen.getByRole("button", {
        name: /register/i,
      })
    );

    expect(
      await waitFor(() =>
        screen.getByRole("heading", {
          name: /you are successfully registered/i,
        })
      )
    ).toBeInTheDocument();
  });
});