import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApp = () => {

    const [categories, setCategories] = useState([])

    const onNewCategory = (newCategory) => {
        if (!categories.includes(newCategory))
            setCategories([newCategory, ...categories]);
    }

    return (
        <>
            {/* Título */}
            <h1>GifApp</h1>

            {/* Input */}
            <AddCategory
                // onPressEnter={setCategories} 
                onNewCategory={onNewCategory}
            />

            {/* Listado de Gif */}
            <GifGrid categories={categories} />

        </>
    )
}
