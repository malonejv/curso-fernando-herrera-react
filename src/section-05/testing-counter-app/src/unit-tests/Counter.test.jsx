import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../Counter.jsx";

describe("Component: Counter", () => {

    const initCount = 1;

    test("should match snapshot", () => {
        const { container } = render(<Counter count={initCount} />);
        expect(container).toMatchSnapshot();
    });

    test("should have an initial count of 100", () => {
        render(<Counter count={initCount} />);
        expect(screen.getByText(`Current Count: ${initCount}`)).toBeTruthy();
    });

    test("should increment count when + button is clicked", () => {
        render(<Counter count={initCount} />);
        const incrementButton = screen.getByText("+");
        fireEvent.click(incrementButton);
        expect(screen.getByText(`Current Count: ${initCount + 1}`)).toBeTruthy();
    });

    test("should decrement count when - button is clicked", () => {
        render(<Counter count={initCount} />);
        const decrementButton = screen.getByText("-");
        fireEvent.click(decrementButton);
        expect(screen.getByText(`Current Count: ${initCount - 1}`)).toBeTruthy();
    });

    test("should reset count to initial value when Reset button is clicked", () => {
        render(<Counter count={initCount} />);
        const incrementButton = screen.getByText("+");
        fireEvent.click(incrementButton);
        const resetButton = screen.getByText("Reset");
        fireEvent.click(resetButton);
        expect(screen.getByText(`Current Count: ${initCount}`)).toBeTruthy();
    });

});