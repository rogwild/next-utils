import React from "react";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import ResetPassword from "./index";
import { renderApp } from "../../../utils/testing";

const server = setupServer(
  rest.post(
    "http://localhost:1337/api/auth/reset-password",
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

describe("Reset password hook", () => {
  it("should get data from inputs and send to backend", async () => {
    renderApp(<ResetPassword />);

    const passwordInput = screen.getByPlaceholderText(
      /type your new password/i
    );
    const confirmPasswordInput = screen.getByPlaceholderText(
      /repeat your new passwor/i
    );

    fireEvent.change(passwordInput, { target: { value: "Password123!" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "Password123!" },
    });
    fireEvent.click(
      screen.getByRole("button", {
        name: /reset password/i,
      })
    );

    expect(
      await waitFor(() =>
        screen.getByRole("heading", {
          name: /password was reset/i,
        })
      )
    ).toBeInTheDocument();
  });
});
