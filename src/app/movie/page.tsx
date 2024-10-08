import Search from '@/Components/Utility/Form/Search'
import React from 'react'
import Genre from '@/Components/Utility/Genre/Genre';
import { genre } from '@/types/genre';

const MoviesPage = async () => {
  const response = await fetch(`${process.env.APP_URL}/api/getMovieGenres`, {
    next: {  revalidate: 0 }
  });
  const data = await response.json()
  const genres: Array<genre> = data.response.genres
  if(data.error) return <h3>{data.error}</h3>
  return (
    <section className='movie_genres'>
      { genres.map((each) => {
        return <Genre link={`/movie/genre/${each.id}?name=${each.name}&page=1`} key={each.id} id={each.id} name={each.name}  />
      }) }
    </section>
  )
}

export default MoviesPage