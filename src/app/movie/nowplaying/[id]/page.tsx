import React from 'react'
import ContentBox from '@/Components/Utility/ContentBox/ContentBox'
import PaginationController from '@/Components/Utility/PaginationController/PaginationController'
import { getHeaders } from '@/api/apiConfig'
import { fetchedMovieData } from '@/types/content'
import { idParams } from '@/types/params'
import { notFound } from 'next/navigation'
import MoviesCollectionDisplay from '@/Components/Utility/CollectionsDisplay/MovieCollection'

type props = {
 params: idParams
}

const NowPlayingPages = async ({ params }: props) => {
 const pageNumber = `${params.id}`
 const containsOnlyNumbers: boolean = /^\d+$/.test(pageNumber)
 if(!containsOnlyNumbers){
  notFound()
 }
 const response = await fetch (`${process.env.APP_URL}/api/movie/top_rated/${params.id}`)
 const result = await response.json()
 const data = result.response
 const moviesData: Array<fetchedMovieData> = data.results
 if(result.error) return <h3>{result.error}</h3>
  return (
    <section>
     <h3 className='movie_collectionHeader'>Now Playing</h3>
     <MoviesCollectionDisplay data={moviesData} />
     <PaginationController 
       currentPage={params.id || 1}
       TotalPages={data.total_pages}
       path={`/movie/nowplaying/`}
     />
    </section>
  )
}

export default NowPlayingPages