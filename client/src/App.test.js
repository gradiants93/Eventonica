import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders eventonica header", () => {
  render(<App />);
  const header = screen.getByText(/eventonica/i);
  expect(header).toBeInTheDocument();
});
