import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Users component", () => {
  test("renders users component", () => {
    render(<App />);
    const header = screen.getByText(/User Management/i);
    expect(header).toBeInTheDocument();
  });
  test("contains unordered list of users", () => {
    render(<App />);
    const listItems = screen.getAllByRole("listitem");
    for (let item in listItems) {
      expect(item).toHaveTextContent();
    }
  });
});
