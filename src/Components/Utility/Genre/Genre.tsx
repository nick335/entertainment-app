import { genre } from '@/types/genre'
import Link from 'next/link'
import React from 'react'

const Genre = ({ name, id, link }: genre) => {
  return (
    <div className='genre'>
      <Link href={link} className='genre_link'>
        <h3 className='genre_name'>{name}</h3>
      </Link> 
    </div>
  )
}

export default Genre