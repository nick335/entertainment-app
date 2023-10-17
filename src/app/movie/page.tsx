import Search from '@/Components/Utility/Form/Search'
import React from 'react'
import Genre from '@/Components/Utility/Genre/Genre';
import { genre } from '@/types/genre';

const MoviesPage = async () => {
  const response = await fetch(`${process.env.APP_URL}/api/getMovieGenres`, {
    next: {  revalidate: 0 }
  });
  const data = await response.json()
  const genres: Array<genre> = data.genres.genres
  return (
    <main className='movie'>
      <Search placeholder='Search for movies' />
      <section className='movie_genres'>
        { genres.map((each) => {
          return <Genre key={each.id} id={each.id} name={each.name}  />
        }) }
      </section>
    </main>
  )
}

export default MoviesPage