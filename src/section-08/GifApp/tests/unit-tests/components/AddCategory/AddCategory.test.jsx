import { render, fireEvent, screen } from '@testing-library/react';
import { AddCategory } from '../../../../src/components/AddCategory/AddCategory';

describe('AddCategory', () => {

    test('Should change the input value', () => {
        render(<AddCategory onNewCategory={() => {}} />);
        const input = screen.getByPlaceholderText('Agrega una categoría');
        fireEvent.change(input, { target: { value: 'Nueva Categoría' } });
        expect(input.value).toBe('Nueva Categoría');
    });

    test('Should call onNewCategory with the correct value when form is submitted', () => {
        const inputValue = 'Nueva Categoría';
        const onNewCategoryMock = jest.fn();

        render(<AddCategory onNewCategory={onNewCategoryMock} />);

        const input = screen.getByPlaceholderText('Agrega una categoría');
        const form = screen.getByRole('form');
        fireEvent.change(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe(''); // Input should be cleared after submission
        expect(screen.queryByText('Debe ingresar una categoría.')).not.toBeTruthy();
        expect(onNewCategoryMock).toHaveBeenCalledWith(inputValue);
        expect(onNewCategoryMock).toHaveBeenCalledTimes(1);
        expect(onNewCategoryMock).toHaveBeenNthCalledWith(1, inputValue);
    });

    test('Should show an error message when trying to submit an empty category', () => {
        const onNewCategoryMock = jest.fn();
        render(<AddCategory onNewCategory={onNewCategoryMock} />);
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(screen.getByText('Debe ingresar una categoría.')).toBeTruthy();
        expect(onNewCategoryMock).not.toHaveBeenCalled();
    });
});