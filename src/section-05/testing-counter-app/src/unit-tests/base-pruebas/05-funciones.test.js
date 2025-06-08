import { getUser, getUsuarioActivo  } from "../../base-pruebas/05-funciones";

describe('File: 05-funciones.js', () => {

    test('getUser debe retornar un objeto con uid y nombre fijo', () => {
        const expectedUser = { uid: 'ABC123', username: 'El_Papi1502'};

        const user = getUser();

        expect(user).toEqual(expectedUser);
    });

    test('getUsuarioActivo debe retornar un objeto con el nombre y uid', () => {
        const name = 'Fernando';
        const expectedActiveUser = { uid: 'ABC567', username: name };

        const activeUser = getUsuarioActivo(name);

        expect(activeUser).toStrictEqual(expectedActiveUser);
    });

});