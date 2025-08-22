import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import { Button } from ".";

test("Button renders correctly", () => {
  const { container } = render(<Button />);
  expect(container).toMatchSnapshot();
});
