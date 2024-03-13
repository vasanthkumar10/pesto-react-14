import { fireEvent, render, screen } from "@testing-library/react";

import { Counter } from "./Counter";
import user from "@testing-library/user-event";

describe("Counter Component", () => {
  describe("Positive test case", () => {
    test("should render the counter properly", () => {
      render(<Counter />);
      const CounterElement = screen.getByRole("heading");
      expect(CounterElement).toBeInTheDocument();

      const ButtomElement = screen.getByRole("button", {
        name: "increment",
      });
      expect(ButtomElement).toBeInTheDocument();
    });
  });

  test("should render the count value 0", () => {
    render(<Counter />);
    const CounterElement = screen.getByRole("heading");
    expect(CounterElement).toHaveTextContent("count - 0");

    const ButtomElement = screen.getByRole("button", {
      name: "increment",
    });
    expect(ButtomElement).toHaveTextContent("increment");
  });

  test("should render 1 after clicking increment", () => {
    render(<Counter />);
    const ButtomElement = screen.getByRole("button", {
      name: "increment",
    });
    fireEvent.click(ButtomElement);
    fireEvent.click(ButtomElement);

    const CounterElement = screen.getByRole("heading");
    expect(CounterElement).toHaveTextContent("count - 2");
  });

  // test("should render 100 after providing input", () => {
  //   render(<Counter />);
  //   const InputElement = screen.getByRole("spinbutton"); // input tags
  //   fireEvent.change(InputElement, { target: { value: 100 } });
  //   expect(InputElement).toHaveValue(100);

  //   const ButtomElement = screen.getByRole("button", {
  //     name: "set count",
  //   });
  //   fireEvent.click(ButtomElement);

  //   const CounterElement = screen.getByRole("heading");
  //   expect(CounterElement).toHaveTextContent("count - 100");
  // });
});
