import React from 'react'

import './Meditation.css'

import { Link } from 'react-router-dom'

const Meditation = ({meditation}) => {
    return (
        <div className='meditation'>
            <h4>{meditation.title}</h4>
            <button className='button'> <Link className='meditationId' to={`/meditar/${meditation.id}`}>Seleccionar para comenzar</Link> </button>
        </div>
    )
}

export default Meditation