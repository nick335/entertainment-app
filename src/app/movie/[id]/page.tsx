import DescriptionContent from '@/Components/Utility/Description/MovieDescriptionContent'
import DescriptionImage from '@/Components/Utility/Description/DescriptionImage'
import { Movie } from '@/types/content'
import { idParams } from '@/types/params'
import { notFound } from 'next/navigation'
import React from 'react'
import MovieDescriptionContent from '@/Components/Utility/Description/MovieDescriptionContent'
import Similar from '@/Components/Utility/Similar/Similar'

type props = {
 params: idParams
}

const MovieDescriptionPage = async ({ params }: props) => {
 const page = `${params.id}`
 const containsOnlyNumbers: boolean = /^\d+$/.test(page)
 if(!containsOnlyNumbers){
  notFound()
 }
 const res = await fetch(`${process.env.APP_URL}/api/getById/movie/${params.id}`, {
  next: { revalidate: 1 }
 })
 const result = await res.json()
 const data = result.response
 const movieData: Movie = data
  return (
    <>
      <section className='description'>
        <DescriptionImage 
          src={movieData.poster_path || movieData.backdrop_path }
          alt={movieData.original_title}
        />
        <MovieDescriptionContent
          title={movieData.original_title}
          language={movieData.original_language}
          idmbLink={movieData.imdb_id}
          webLink={movieData.homepage}
          length={movieData.runtime}
          tagline={movieData.tagline}
          synopsis={movieData.overview}
          status={movieData.status}
          genre={movieData.genres}
          cast={movieData.credits.cast}
          year={movieData.release_date}
          ratings={movieData.vote_average}
        />    
      </section>
      <Similar type='movie' id={movieData.id} />
    </>
    
  )
}

export default MovieDescriptionPage