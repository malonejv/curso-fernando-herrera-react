import { retornaArreglo } from "../../base-pruebas/07-deses-arr";


describe('File: 07-deses-arr.test.js', () => {
    test('retornaArreglo should return an array with a string ABC and a number 123', () => {
        const expectedString = 'ABC';
        const expectedNumber = 123;

        const result = retornaArreglo();
        const [letters, numbers] = result;
        
        expect(Array.isArray(result)).toBeTruthy();
        expect(result.length).toBe(2);
        expect(letters).toBe(expectedString);
        expect(numbers).toBe(expectedNumber);
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');
        expect(result).toEqual([expectedString, expectedNumber]);
    });
});