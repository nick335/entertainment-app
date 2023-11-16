import { Genre } from '@/types/content'
import Link from 'next/link'
import React from 'react'

type props = {
 genres: Genre[]
 link: string
}

const DescriptionContentgenres = ({ genres, link  }: props) => {
  return (
    <div className='description_Content_genres'>
     <h3 className='description_Content_subHeaders'>Genres</h3>
     <ul className='description_Content_ul'>
      {genres.map((genre) => {
       return <li key={genre.id}><Link href={`${link}/${genre.id}?name=${genre.name}&page=1`}>{genre.name}</Link></li>
      })}
     </ul>
    </div>
  )
}

export default DescriptionContentgenres