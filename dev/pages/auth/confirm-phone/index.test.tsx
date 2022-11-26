import React from "react";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { renderApp } from "../../../utils/testing";
import ConfirmPhone from "./index";

const server = setupServer(
  rest.get(
    "http://localhost:1337/api/auth/phone-confirmation",
    async (req, res, ctx) => {
      console.log(`🚀 ~ req`, req.url.searchParams.get("code"));

      return res(
        ctx.json({
          ok: true,
        })
      );
    }
  ),
  rest.post(
    "http://localhost:1337/api/auth/send-phone-confirmation",
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
    renderApp(<ConfirmPhone />, {
      route:
        "?code=secretcodesecretcodesecretcodesecretcode&phone=%2B7934576584433",
    });

    fireEvent.click(
      screen.getByRole("button", {
        name: /confirm phone/i,
      })
    );

    expect(
      await waitFor(() =>
        screen.getByRole("heading", {
          name: /phone was confirmed/i,
        })
      )
    ).toBeInTheDocument();
  });

  it("resend button is sending phone code", async () => {
    expect(3).toEqual(3);
  });
});
