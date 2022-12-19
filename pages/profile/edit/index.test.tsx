import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import Index from "../../../pages";

const server = setupServer(
  rest.post(`http://localhost:1337/api/auth/local`, async (req, res, ctx) => {
    const data = await req.json();
    console.log(`🚀 ~ rest.post ~ req`, data);

    return res(
      ctx.json({
        jwt: "XXXXXXXXXXXXXXXXXXXX",
        user: {
          id: 1,
        },
      })
    );
  }),
  rest.put(`http://localhost:1337/api/users/1`, async (req, res, ctx) => {
    // const data = await req.json();
    // console.log(`🚀 ~ rest.post ~ req`, req.body);

    return res(
      ctx.json({
        data: {
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

describe("Edit profile hook", () => {
  it("should get data from inputs and send to‰ backend", async () => {
    render(<Index />);

    fireEvent.click(
      screen.getByRole("link", {
        name: /login/i,
      })
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

    await waitFor(() => {
      expect(
        screen.getByRole("heading", {
          name: /you are logged in/i,
        })
      ).toBeInTheDocument(); //?
    });

    fireEvent.click(
      screen.getByRole("link", {
        name: /edit profile/i,
      })
    );

    const usernameInput = screen.getByPlaceholderText(/type your username/i);

    fireEvent.change(usernameInput, { target: { value: "tester" } });
    fireEvent.click(
      screen.getByRole("button", {
        name: /edit profile/i,
      })
    );

    expect(
      await waitFor(() =>
        screen.getByRole("heading", {
          name: /profile was successfully updated/i,
        })
      )
    ).toBeInTheDocument();
  });
});
