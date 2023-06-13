import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('02-template-strings.js', ()=>{

    test('getSaludo_WithName_Returns_OK', ()=> {
        const name = 'Fernando';
        let expected = `Hola ${name}`;

        const result = getSaludo(name);

        expect(result).toBe(expected);
    });
});