import { genre } from '@/types/genre'
import React from 'react'

const Genre = ({ name, id }: genre) => {
  return (
    <div className='genre'>
     <h3 className='genre_name'>{name}</h3>
    </div>
  )
}

export default Genre