import Search from '@/Components/Utility/Form/Search'
import Genre from '@/Components/Utility/Genre/Genre';
import { genre } from '@/types/genre';
import React from 'react'

const TvPage = async () => {
  const response = await fetch(`${process.env.APP_URL}/api/getTvGenres`, {
    next: {  revalidate: 0 }
  });
  const data = await response.json()
  const genres: Array<genre> = data.genres.genres
  return (
    <main className='tv'>
      <Search placeholder='Search for Tv series' />
      
      <section className='tv_genres'>
        { genres.map((each) => {
          return <Genre key={each.id} id={each.id} name={each.name}  />
        }) }
      </section>
    </main>
  )
}


export default TvPage