import React from "react";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import ResetPassword from "./index";
import { renderApp } from "../../../utils/testing";
import ConfirmEmail from "./index";

const server = setupServer(
  rest.get(
    "http://localhost:1337/api/auth/email-confirmation",
    async (req, res, ctx) => {
      console.log(`🚀 ~ req`, req.url.searchParams.get("code"));

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
    renderApp(<ConfirmEmail />, {
      route:
        "?code=secretcodesecretcodesecretcodesecretcode&email=test@example.com",
    });

    fireEvent.click(
      screen.getByRole("button", {
        name: /confirm email/i,
      })
    );

    expect(
      await waitFor(() =>
        screen.getByRole("heading", {
          name: /email was confirmed/i,
        })
      )
    ).toBeInTheDocument();
  });
});
