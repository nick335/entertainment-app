import MoviesCollectionDisplay from '@/Components/Utility/CollectionsDisplay/MovieCollection'
import PaginationController from '@/Components/Utility/PaginationController/PaginationController'
import { fetchedMovieData } from '@/types/content'
import { idParams } from '@/types/params'
import { notFound } from 'next/navigation'
import React from 'react'


type props = {
 params: idParams
}


const UpcomingPages = async ({ params }: props) => {
 const pageNumber = `${params.id}`
 const containsOnlyNumbers: boolean = /^\d+$/.test(pageNumber)
 if(!containsOnlyNumbers){
  notFound()
 }
 const response = await fetch(`${process.env.APP_URL}/api/movie/upcoming/${params.id}`)
 const result = await response.json()
 const data = result.response
 const moviesData: Array<fetchedMovieData> = data.results
 if(result.error) return <h3>{result.error}</h3>
  return (
    <section>
     <h3 className='movie_collectionHeader'>Upcoming Movies</h3>
     <MoviesCollectionDisplay data={moviesData} />
     <PaginationController 
       currentPage={params.id || 1}
       TotalPages={data.total_pages}
       path={`/movie/upcoming/`}
     />
    </section>
  )
}

export default UpcomingPages