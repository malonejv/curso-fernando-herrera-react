import React, { useState } from 'react'

export const AddCategory = ({ onNewCategory } /*{ onPressEnter }*/) => {

    const [category, setCategory] = useState('');

    const onCategoryChange = (e) => {
        setCategory(e.target.value)
    }

    /*
    const onSubmit = (e) => {
        e.preventDefault();
        if (category.trim().length > 0) {
            const newCategory = category
            onPressEnter(categories => {
                if (!categories.includes(newCategory)) {
                    setCategory('')
                    return [...categories, newCategory]
                }
                else
                    return categories
            })
        }

        return
    }
    */

    const onSubmit = (e) => {
        e.preventDefault();

        const newValue = category.trim()
        if (newValue.length > 0) {
            const newCategory = newValue
            onNewCategory(newCategory)
            setCategory('')
        }
        return
    }

    return (
        <div className='add-category'>
            <form onSubmit={onSubmit}>
                <div className="input-group">
                    <input name="newcategory" type="text" className="form-control lg" required id="newcategory" placeholder=" " maxLength={50}
                        value={category}
                        onChange={onCategoryChange}
                    />
                    <label htmlFor="newcategory" className="form-label">Categoría*</label>
                    <span data-validation="newcategory" className="c-red"></span>
                </div>
            </form>
        </div>
    )
}
