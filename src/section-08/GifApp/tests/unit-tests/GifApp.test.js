import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import GifApp from '../../src/GifApp'


describe("GifApp", () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("Should render the title", () => {
        const { container } = render(<GifApp />);
        expect(container).toMatchSnapshot();
    });

    test("Should add a new category", () => {
        render(<GifApp />);

        const input = screen.getByPlaceholderText("Agrega una categoría");
        const form = screen.getByRole("form");

        fireEvent.change(input, { target: { value: "Capibara" } });
        fireEvent.submit(form);

        // Espera que el nuevo header esté en el documento
        expect(screen.getByText("Capibara")).toBeTruthy();
    });

    test("Should not add empty category", () => {
        render(<GifApp />);
        const form = screen.getByRole("form");
        fireEvent.submit(form);
        expect(screen.queryByText("Debe ingresar una categoría.")).toBeTruthy();
    });

    test("Should not add duplicate category", () => {
        render(<GifApp />);
        const input = screen.getByPlaceholderText("Agrega una categoría");
        const form = screen.getByRole("form");

        fireEvent.change(input, { target: { value: "Random" } });
        fireEvent.submit(form);

        // No debe agregar otra categoría "Random"
        const headers = screen.getAllByText("Random");
        expect(headers.length).toBe(1);
    });

    test("Should remove a category", () => {
        jest.spyOn(React, 'useState').mockImplementationOnce(() => [["Random"], jest.fn()]);
        
        render(<GifApp />);
        
        const input = screen.getByPlaceholderText("Agrega una categoría");
        const form = screen.getByRole("form");
        fireEvent.change(input, { target: { value: "Capibara" } });
        fireEvent.submit(form);

        // Busca el botón de eliminar (X) del header de Capibara
        let removeButtons = screen.getAllByText("X");
        fireEvent.click(removeButtons[0]);
        

        // Ya no debe estar Capibara en el documento
        expect(screen.queryByText("Capibara")).not.toBeTruthy();
    });

});