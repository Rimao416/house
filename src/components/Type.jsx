import React from 'react'

function Type({image,title,number}) {
  return (
    <div className='type'>
      <div className="type__wrapper">
        <h4>{title}</h4>
        <p>{number} Properties</p>
      </div>
      <img src={image} alt={image} className="type__image" />

    </div>
  )
}

export default Type
