import { displayContent } from '@/types/content'
import React from 'react'
import ContentBox from '../ContentBox/ContentBox'

type props = {
 data: displayContent[]
}

const BookmarkCollection = ({ data }: props) => {
  return (
    <div className='movie_collection'>
     {data.map((bookmark) => {
      return <ContentBox 
               key={bookmark.id}
               id={bookmark.id}
               name={bookmark.name}
               img={bookmark.img}
               yearString={bookmark.yearString}
               type={bookmark.type}
             />
     })}
    </div>
  )
}

export default BookmarkCollection