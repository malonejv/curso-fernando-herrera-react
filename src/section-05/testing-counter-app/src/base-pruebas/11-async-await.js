import { apiKey } from 'config/env';

export const getImagen = async () => {

    try {
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();

        const { url } = data.images.original;
        return url;
    } catch(err) {
        throw Error('No se encontró una imagen');
    }
}