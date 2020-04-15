import React from "react";
import { render, RenderResult } from "@testing-library/react";
import Button from "./";

describe("Button Component", () => {
  const getComponent = (): RenderResult => render(<Button> Hello </Button>);

  test("renders button text", () => {
    const { getByText } = getComponent();
    const text = getByText(/Hello/i);
    expect(text).toBeInTheDocument();
  });

  test("match snapshot 1", () => {
    const { container } = getComponent();
    expect(container.firstChild).toMatchSnapshot();
  });
});
