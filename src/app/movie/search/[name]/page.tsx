import MoviesCollectionDisplay from '@/Components/Utility/CollectionsDisplay/MovieCollection'
import PaginationController from '@/Components/Utility/PaginationController/PaginationController'
import { fetchedMovieData } from '@/types/content'
import { nameParams, searchPageSearchParams } from '@/types/params'
import { notFound } from 'next/navigation'
import React from 'react'

type props = {
 params: nameParams
 searchParams: searchPageSearchParams
}

const MovieSearchPage = async ({params, searchParams}: props) => {
 const { name } = params
 const pageNumber = searchParams.page || 1
 const res = await fetch(`${process.env.APP_URL}/api/search/movie/${name}/${pageNumber}`)

 const result = await res.json()
 const data = result.response
 const MoviesData: fetchedMovieData[]  = data.results
 
 // if(pageNumber > data.total_pages ){
 //  return notFound()
 // }
  return (
    <section>
     <h3 className='movie_collectionHeader'>Found {data.total_results} results for {name}</h3>
     <MoviesCollectionDisplay data={MoviesData} />
     <PaginationController path={`movie/search/${name}?page=`} currentPage={pageNumber} TotalPages={data.total_pages} />
    </section>
  )
}

export default MovieSearchPage