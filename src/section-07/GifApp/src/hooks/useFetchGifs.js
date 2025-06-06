import { useState, useEffect } from "react";
import GiphyService from "../services/GiphyService";

const giphyService = new GiphyService();

export const useFetchGifs = (category) => {

    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        giphyService.fetchGifs(category, 10)
            .then((fetchedGifs) => {
                setGifs(fetchedGifs);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [category]);

    return [
        gifs,
        isLoading
    ]
}