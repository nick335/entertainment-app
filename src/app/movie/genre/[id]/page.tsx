import ContentBox from '@/Components/Utility/ContentBox/ContentBox'
import PageLimit from '@/Components/Utility/Notification/PageLimit'
import PaginationController from '@/Components/Utility/PaginationController/PaginationController'
import { getHeaders } from '@/api/apiConfig'
import { fetchedMovieData } from '@/types/content'
import { genreSearchParams, idParams } from '@/types/params'
import { notFound } from 'next/navigation'
import React from 'react'



type props = {
 params: idParams
 searchParams: genreSearchParams
}

const Page = async ({ params, searchParams }:props ) => {
  const pageNumber = `${searchParams.page}`
  const containsOnlyNumbers: boolean = /^\d+$/.test(pageNumber)
  if(!searchParams.name || !searchParams.page || !containsOnlyNumbers){
    notFound()
  }else if(searchParams.page > 500){
    return <PageLimit />
  }
  const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=${searchParams.page}&sort_by=popularity.desc&with_genres=${params.id}`, {
    headers: getHeaders(), 
    next: { revalidate: 1 }
  })
  const data = await response.json()
  const moviesData: Array<fetchedMovieData> = data.results 

  if(data.total_results === 0){
    notFound()
  }
  if(data.error) return <h3>{data.error}</h3>
  return (
    <section>
      <h3 className='movie_collectionHeader'>{searchParams.name}</h3>
      <div className='movie_collection'>
        { moviesData.map((movie) => {
          return <ContentBox 
                    key={movie.id}
                    id={movie.id}
                    name={movie.original_title}
                    img={movie.backdrop_path || movie.poster_path}
                    type={'movie'}
                    yearString={movie.release_date}
                  />
        }) }
      </div>
      <PaginationController 
          currentPage={searchParams.page || 0}
          TotalPages={data.total_pages}
          path={`/movie/genre/${params.id}?name=${searchParams.name}&page=`} 
      />
    </section>
  )
}

export default Page;