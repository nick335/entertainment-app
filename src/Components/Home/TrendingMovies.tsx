'use client'
import React from 'react'
import HomeSectionHeader from './HomeSectionHeader'
import useSWR from 'swr'
import fetcher from '@/Hooks/useFetcher'
import Loader from '../Utility/loader/loader'
import TrendingContentBox from '../Utility/ContentBox/TrendingContentBox'
import ContentBox from '../Utility/ContentBox/ContentBox'

const TrendingMovies = () => {
  const apiURl = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US'
  const { data, error, isLoading } = useSWR(apiURl, fetcher)
  console.log(data)
  return (
    <section className='home_section'>
     <HomeSectionHeader 
      header='trending'
      type='movie'
     />
     <div className='home_section_Trending-wrapper'>
      <TrendingContentBox /> 
      <TrendingContentBox /> 
      <TrendingContentBox /> 
      <TrendingContentBox /> 
      <TrendingContentBox /> 
      <TrendingContentBox /> 
      <TrendingContentBox /> 
     </div>
      {/* <TrendingContentBox /> */}
      {/* <div className='home_section_Collection-wrapper'>
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
        <ContentBox />
      </div> */}
     {/* { isLoading && <div className='loader'><Loader /></div> } */}
    </section>
  )
}

export default TrendingMovies