import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/08-imp-exp.js';

describe('File: 08-imp-exp.test.js', () => {

    test('getHeroeById should return a hero object with id 1', () => {

        const id = 1;
        const expectedHero = {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        };

        const hero = getHeroeById(id);
        const {name, owner} = hero;


        expect(hero).toEqual(expectedHero);
        expect(name).toBe(expectedHero.name);
        expect(owner).toBe(expectedHero.owner);
    });

    test('getHeroeById should return undefined for non-existent id', () => {

        const id = 10;
        const hero = getHeroeById(id);

        expect(hero).toBeUndefined();
    });

    test('getHeroesByOwner should return an array of heroes for owner "DC"', () => {

        const owner = 'DC';
        const expectedHeroes = [
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }
        ];

        const heroes = getHeroesByOwner(owner);

        expect(heroes).toEqual(expectedHeroes);
        expect(heroes.length).toBe(3);
        expect(heroes).toEqual(heroes.filter(hero => hero.owner === owner));
    });

});

