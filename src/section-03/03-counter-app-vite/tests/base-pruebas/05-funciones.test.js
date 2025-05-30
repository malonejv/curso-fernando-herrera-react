import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('05-funciones.js',()=>{

    test('getUser_Always_Returns_User',()=>{
        const expected = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const result = getUser();

        expect(result).not.toBeNull();
        expect(result).toEqual(expected);
    });

    test('getUsuarioActivo_WithName_AlwaysReturn_User',()=>{
        const name = 'Test name';
        const expected = {
            uid: 'ABC567',
            username: name
        };

        const result = getUsuarioActivo(name);

        expect(result).not.toBeNull();
        expect(result).toEqual(expected);
    });
});