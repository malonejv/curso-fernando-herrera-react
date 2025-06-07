import { getImagen } from '../../base-pruebas/11-async-await'

describe('File: 11-async-await.js', () => {

    test('getImagen should return a url of an image', async () => {
        const url = await getImagen();

        expect(typeof url).toBe('string');

    });

});