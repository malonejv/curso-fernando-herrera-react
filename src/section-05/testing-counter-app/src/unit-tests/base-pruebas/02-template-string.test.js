import { getSaludo } from '../../base-pruebas/02-template-string';

describe('File: 02-template-string.js', () => {

    test('getSaludo debe retornar nombre concatenado', () => {
        const name = 'Fernando';
        const expectedGreeting = getSaludo(name);

        expect(expectedGreeting).toBe(`Hola ${name}`);  
    })

})