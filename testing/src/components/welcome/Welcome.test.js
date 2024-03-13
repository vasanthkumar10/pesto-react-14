import { render, screen } from "@testing-library/react";

import { Welcome } from "./Welcome";

describe("Welcome Component", () => {
  test("should render properly", () => {
    render(<Welcome />);
    const WelcomeElement = screen.getByRole("heading", {
      level: 1,
    });
    expect(WelcomeElement).toBeInTheDocument();
    expect(WelcomeElement).toHaveTextContent("Welcome");
  });

  test("should render Guest", () => {
    render(<Welcome />);
    const WelcomeElement = screen.getByRole("heading", {
      level: 2,
    });
    expect(WelcomeElement).toBeInTheDocument();
    expect(WelcomeElement).toHaveTextContent("Pesto - Guest");
  });

  // test("should render Vasi", () => {
  //   render(<Welcome name="Vasi" />);
  //   const WelcomeElement = screen.getByRole("heading", {
  //     level: 2,
  //   });
  //   expect(WelcomeElement).toBeInTheDocument();
  //   expect(WelcomeElement).toHaveTextContent("Pesto - Vasi");
  // });
});
