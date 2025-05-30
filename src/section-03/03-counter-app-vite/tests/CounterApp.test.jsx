import { render, screen, fireEvent } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('CounterApp', () => {

    const expectedInitialValue = 100;

    test('Must have initial value of 100', () => {

        render(
            <CounterApp value={expectedInitialValue} />
        );

        expect(parseInt(screen.getByRole('heading', { level: 2 }).innerHTML)).toBe(expectedInitialValue);

    });

    test('When click +1 - Must increment counter', () => {

        render(
            <CounterApp value={expectedInitialValue} />
        );

        fireEvent.click(screen.getByText('+1'));

        expect(parseInt(screen.getByRole('heading', { level: 2 }).innerHTML)).toBe(expectedInitialValue + 1);
    });

    test('When click -1 - Must decrement counter', () => {

        render(
            <CounterApp value={expectedInitialValue} />
        );

        fireEvent.click(screen.getByText('-1'));

        expect(parseInt(screen.getByRole('heading', { level: 2 }).innerHTML)).toBe(expectedInitialValue - 1);
    });

    test('When click Reset - Must restore initial value', () => {

        render(
            <CounterApp value={expectedInitialValue} />
        );
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('-1'));

        fireEvent.click(screen.getByText('Reset'));

        expect(parseInt(screen.getByRole('heading', { level: 2 }).innerHTML)).toBe(expectedInitialValue);
    });

});