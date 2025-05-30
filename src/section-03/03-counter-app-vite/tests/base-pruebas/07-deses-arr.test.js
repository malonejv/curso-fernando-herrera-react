import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('07-deses-arr.js',()=>{

    test('retornaArreglo_Always_ReturnsArrayWithStringAndNumber',()=>{
        const expected = ['ABC',123];

        const result = retornaArreglo();

        expect(result).not.toBeNull();
        expect(result).toHaveLength(2);
        expect(typeof result[0]).toBe('string');
        expect(typeof result[1]).toBe('number');
    });

});