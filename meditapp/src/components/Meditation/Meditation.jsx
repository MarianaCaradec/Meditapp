import React from 'react'
import { Link } from 'react-router-dom'

const Meditation = ({meditation}) => {
    return (
        <div className='meditation'>
            <h4>{meditation.title}</h4>
            <Link to={`/meditar/${meditation.id}`}>Seleccionar para comenzar</Link>
        </div>
    )
}

export default Meditation