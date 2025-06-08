import { getHeroeByIdAsync } from '../../base-pruebas/09-promesas'

describe('File: 09-promesas.js', () => {


    test('getHeroeByIdAsync should return a hero object with id 1 - using done', (done) => {

        const id = 1;
        const expectedHero = {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        };

        getHeroeByIdAsync(id)
            .then((hero) => {
                const { name, owner } = hero;

                expect(hero).toEqual(expectedHero);
                expect(name).toBe(expectedHero.name);
                expect(owner).toBe(expectedHero.owner);

                done();
            });
    });

    test('getHeroeByIdAsync should return error message - using done', (done) => {

        const id = 10;
        getHeroeByIdAsync(id)
            .then((hero) => {
                expect(hero).toBeFalsy();
                done();
            })
            .catch((error) => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });

    });

    test('getHeroeByIdAsync should return a hero object with id 1 - async', async () => {

        const id = 1;
        const expectedHero = {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        };

        const hero = await getHeroeByIdAsync(id);
        const { name, owner } = hero;


        expect(hero).toEqual(expectedHero);
        expect(name).toBe(expectedHero.name);
        expect(owner).toBe(expectedHero.owner);
    });

    test('getHeroeByIdAsync should return error message - async', async () => {

        const id = 10;
        try {
            const hero = await getHeroeByIdAsync(id);
            expect(hero).toBeFalsy();
        } catch (error) {
            expect(error).toBe('No se pudo encontrar el héroe');
        }
    });

});