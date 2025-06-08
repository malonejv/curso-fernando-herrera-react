import { render, screen } from "@testing-library/react";
import SecondaryApp from "../SecondaryApp";

describe("Component: SecondaryApp", () => {
  const expectedTitle = "Hello, World!";
  const expectedAuthor = "— Franklin D. Roosevelt";
  const expectedQuote = "Some inspiring quote here";

  test("should match snapshot", () => {
    const { container } = render(<SecondaryApp quote={expectedQuote} />);
    expect(container).toMatchSnapshot();
  });

  test("should have a test Hello World", () => {
    render(<SecondaryApp />);
    expect(screen.getByRole("heading", { level: 1, name: expectedTitle })).toBeTruthy();
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toBe(expectedTitle);
  });

  test("should display the quote sent by props", () => {
    render(<SecondaryApp quote={expectedQuote} />);
    expect(screen.getByText(expectedQuote)).toBeTruthy();
  });
});
