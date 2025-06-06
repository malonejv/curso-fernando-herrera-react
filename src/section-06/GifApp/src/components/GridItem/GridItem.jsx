import React from 'react'
import './GridItem.css'
export const GridItem = ({ gif }) => {
  return (
    <div className='card'>
      <img src={gif.url} alt={gif.title} />
      <h3>{gif.title}</h3>
    </div>
  )
}
