import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('09-promesas.js',()=>{

    test('getHeroeByIdAsync_WithValidId_ReturnsHeroe', (done)=>{
        const id = 1;
        const expected = {
            id: 1,
            name: "Batman",
            owner: "DC",
          };

        const result = getHeroeByIdAsync(id)
                        .then( response =>{

                            expect(response).toEqual(expected);

                            done();

                        });

    });

    test('getHeroeByIdAsync_WithNoValidId_ReturnsError', (done)=>{
        const id = 6;
        const expected = 'No se pudo encontrar el héroe';
        
        const result = getHeroeByIdAsync(id)
                        .catch( error =>{

                            expect(error).toBe(expected);

                            done();

                        });

    });

    test('getHeroeByIdAsync_WithValidId_ReturnsHeroe', async ()=>{
        const id = 1;
        const expected = {
            id: 1,
            name: "Batman",
            owner: "DC",
          };

        const result = await getHeroeByIdAsync(id);

        expect(result).toEqual(expected);

    });

    test('getHeroeByIdAsync_WithNoValidId_ReturnsError', async ()=>{
        const id = 6;
        const expected = 'No se pudo encontrar el héroe';
        
        //Alternative
        // await expect(getHeroeByIdAsync(id)).rejects.toBe(expected);
        try {
            await getHeroeByIdAsync(id);
        }catch(ex){
            expect(ex).toMatch(expected);
        }
    });

});