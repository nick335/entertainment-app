import MoviesCollectionDisplay from '@/Components/Utility/CollectionsDisplay/MovieCollection'
import PaginationController from '@/Components/Utility/PaginationController/PaginationController'
import { fetchedMovieData } from '@/types/content'
import { idParams } from '@/types/params'
import { notFound } from 'next/navigation'
import React from 'react'

type props = {
 params: idParams
}

const TopRatedPages = async ({ params }: props) => {
 const pageNumber = `${params.id}`
 const containsOnlyNumbers: boolean = /^\d+$/.test(pageNumber)
 if(!containsOnlyNumbers){
  notFound()
 }
 const response = await fetch(`${process.env.APP_URL}/api/movie/top_rated/${params.id}`)

 
 const result = await response.json()
 const data = result.response
 const moviesData: Array<fetchedMovieData> = data.results
  return (
    <section>
     <h3 className='movie_collectionHeader'>Top Rated Movies</h3>
     <MoviesCollectionDisplay data={moviesData} />
     <PaginationController 
       currentPage={params.id || 1}
       TotalPages={data.total_pages}
       path={`/movie/toprated/`}
     />
    </section>
  )
}

export default TopRatedPages