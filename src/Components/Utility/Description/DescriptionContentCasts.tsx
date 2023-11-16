import { Cast } from '@/types/content'
import React from 'react'

type props = {
 casts: Cast[]
}

const DescriptionContentCasts = ({ casts }: props) => {
  return (
    <div className='description_Content_casts'>
     <h3 className='description_Content_subHeaders'>Casts</h3>
     <ul className='description_Content_ul'>
      {casts.map((cast) => {
       return <li key={cast.cast_id}>{cast.name}</li>
      })}
     </ul>
    </div>
  )
}

export default DescriptionContentCasts