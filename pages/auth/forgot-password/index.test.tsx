import React from "react";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import ForgotPassword from "./index";
import { renderApp } from "~utils/testing";

const server = setupServer(
  rest.post(
    "http://localhost:1337/api/auth/forgot-password",
    async (req, res, ctx) => {
      const data = await req.json();
      console.log(`🚀 ~ rest.post ~ req`, data);

      return res(
        ctx.json({
          ok: true,
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

describe("Forgot password hook", () => {
  it("should get data from inputs and send to backend", async () => {
    renderApp(<ForgotPassword />);

    const emailInput = screen.getByPlaceholderText(/type your email/i);

    fireEvent.change(emailInput, { target: { value: "tester@example.com" } });
    fireEvent.click(
      screen.getByRole("button", {
        name: /send reset password link/i,
      })
    );

    expect(
      await waitFor(() =>
        screen.getByRole("heading", {
          name: /email was sent/i,
        })
      )
    ).toBeInTheDocument();
  });
});