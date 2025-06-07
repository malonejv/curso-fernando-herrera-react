import { getImagen } from '../../base-pruebas/11-async-await'

// ...existing code...
describe('File: 11-async-await.js', () => {

    beforeEach(() => {
        global.fetch = jest.fn();
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    test('getImagen should return a url of an image', async () => {
        const mockUrl = 'https://mocked-url.com/image.gif';

        global.fetch.mockResolvedValueOnce({
            json: jest.fn().mockResolvedValueOnce({
                data: { images: { original: { url: mockUrl } } }
            })
        });

        const url = await getImagen();

        expect(typeof url).toBe('string');
        expect(url).toMatch(/^(http|ftp)[s]?:\/\//);

    });

});