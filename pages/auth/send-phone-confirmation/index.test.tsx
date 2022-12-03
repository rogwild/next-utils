import React from "react";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { renderApp } from "~utils/testing";
import SendPhoneConfirmation from "./index";

const server = setupServer(
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

describe("Send phone confirmation hook", () => {
  it("should get data from inputs and send to backend", async () => {
    renderApp(<SendPhoneConfirmation />);

    const phoneInput = screen.getByPlaceholderText(/type your phone/i);

    fireEvent.change(phoneInput, { target: { value: "+79435648432" } });
    fireEvent.click(
      screen.getByRole("button", {
        name: /send code/i,
      })
    );

    server; //?

    expect(
      await waitFor(() =>
        screen.getByRole("heading", {
          name: /code was send to your phone/i,
        })
      )
    ).toBeInTheDocument();
  });
});
