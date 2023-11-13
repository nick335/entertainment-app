import MoviesCollectionDisplay from '@/Components/Utility/CollectionsDisplay/MovieCollection'
import ContentBox from '@/Components/Utility/ContentBox/ContentBox'
import PaginationController from '@/Components/Utility/PaginationController/PaginationController'
import { getHeaders } from '@/api/apiConfig'
import { fetchedMovieData } from '@/types/content'
import { idParams } from '@/types/params'
import { notFound } from 'next/navigation'
import React from 'react'

type props = {
 params: idParams
}

const Popularpage = async ({ params }: props) => {
 const pageNumber = `${params.id}`
 const containsOnlyNumbers: boolean = /^\d+$/.test(pageNumber)
 if(!containsOnlyNumbers){
  notFound()
 }
 const response = await fetch (`${process.env.APP_URL}/api/movie/popular/${params.id}`)
 const result = await response.json()
 const data = result.response
 const moviesData: Array<fetchedMovieData> = data.results
 
 if(data.total_results === 0){
  notFound()
 }
  return (
    <main>
     <h3 className='movie_collectionHeader'>Popular Movies</h3>
     <MoviesCollectionDisplay data={moviesData} />
     <PaginationController 
       currentPage={params.id || 1}
       TotalPages={data.total_pages}
       path={`/movie/popular/`}
     />
    </main>
  )
}

export default Popularpage