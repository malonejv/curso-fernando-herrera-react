import { render } from "@testing-library/react";
import App from "../App";

describe('Component: App',()=>{

    test('should match snapshot',()=>{

        const expectedTitle = "Hello, World!";
        const expectedAuthor = "— Franklin D. Roosevelt";
        const { container, getByText } = render(<App/>);

        const h1 = container.querySelector('h1');

        expect(container).toMatchSnapshot();
        expect(getByText(expectedAuthor)).toBeTruthy();
        expect(h1.innerHTML).toBe(expectedTitle);
        expect(h1.innerHTML).toContain("World");
    });

    test('should have a test Hello World',()=>{

        const expectedTitle = "Hello, World!";
        const { getByTestId } = render(<App/>);

        expect(getByTestId('test-title').innerHTML).toBe(expectedTitle);
    });

    test('should display the quote sent by props',()=>{

        const expectedQuote = "Some inspiring quote here";
        const { getByText } = render(<App inspiringQuote={expectedQuote}/>);

        expect(getByText(expectedQuote)).toBeTruthy();
    });

});