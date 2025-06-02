import { usContext  } from "../../base-pruebas/06-deses-obj";

describe('File: 06-deses-obj.js', () => {

    test('usContext debe retornar un objeto con nombreClave, anios y latlng', () => {
        const persona = {
            clave: 'Ironman',
            nombre: 'Tony',
            edad: 45,
            rango: 'Avenger',
        };
        const expected = {
            nombreClave: 'Ironman',
            anios: 45,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        };

        const { nombreClave, anios, latlng: { lat, lng } } = usContext( persona );

        expect(nombreClave).toBe(expected.nombreClave);
        expect(anios).toBe(expected.anios);
        expect(lat).toBe(expected.latlng.lat);
        expect(lng).toBe(expected.latlng.lng);
    });

});
