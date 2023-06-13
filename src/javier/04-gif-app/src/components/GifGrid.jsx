import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ categories }) => {

    

    return (
        <ul>
            { categories.map(category => 
                <GifGridItem  key={category} category={category} />
                )
            }
        </ul>
    )
}
