import React, { useState, useEffect } from 'react'
import { GifItem } from './GifItem';
import GiphyApiService from '../services/GiphyApiService';

export const GifGridItem = ({ category }) => {

    const [gifs, setGifs] = useState([]);

    const getGifs = async() => {
        const giphyService = new GiphyApiService();

        var newGifs = await giphyService.getGifs(category);
        setGifs(newGifs);
    }

    useEffect(() => {
        getGifs();
    }, [])

    return (
        <li>
            <h1>{category}</h1>
            <div className='card-grid'>
                { gifs.map((gif) => 
                    <GifItem key={gif.id} { ...gif } />
                    )
                }
            </div>
        </li>
    )
}
