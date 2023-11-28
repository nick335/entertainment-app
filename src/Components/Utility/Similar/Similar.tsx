'use client'
import React from 'react'
import SkeletonLoaderCollection from '../loader/SkeletonLoaderCollection'
import useSWR from 'swr'
import fetcher from '@/Hooks/useFetcher'
import { fetchedMovieData, fetchedTVData } from '@/types/content'
import MoviesCollectionDisplay from '../CollectionsDisplay/MovieCollection'
import TvsCollectionDisplay from '../CollectionsDisplay/TvsCollection'

type props = {
  id: number
  type: string
}

const Similar = ({ id, type }: props) => {
  const { isLoading, data, error } = useSWR(`https://api.themoviedb.org/3/${type}/${id}/similar?language=en-US&page=1`,fetcher)
  const moviesData: fetchedMovieData[] | fetchedTVData[] = data
  return (
    <section className='similar'>
     <h3 className='similar_header'>you might also like</h3>
     { isLoading ? <SkeletonLoaderCollection /> : 
        type === 'movie' ? 
        <MoviesCollectionDisplay data={moviesData as fetchedMovieData[]} />
        : 
        <TvsCollectionDisplay data={moviesData as fetchedTVData[]} />}
    </section>

  )
}

export default Similar