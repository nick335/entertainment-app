import { fetchedMovieData } from '@/types/content'
import ContentBox from '../ContentBox/ContentBox'
import React from 'react'

type props = {
 data: Array<fetchedMovieData>
}

const MoviesCollectionDisplay = ({ data }: props) => {
  return (
    <div className='movie_collection'>
     { data.map((movie) => {
        return <ContentBox 
                 key={movie.id}
                 id={movie.id}
                 name={movie.original_title}
                 img={movie.backdrop_path || movie.poster_path}
                 type='movie'
                 yearString={movie.release_date}
               />
      }) }
    </div>
  )
}

export default MoviesCollectionDisplay