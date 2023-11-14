'use client'
import React from 'react'
import ContentBox from '../Utility/ContentBox/ContentBox';
import HomeSectionHeader from './HomeSectionHeader';
import { homesection } from '@/types/home';
import fetcher from '@/Hooks/useFetcher';
import Loader from '../Utility/loader/loader';
import useSWR from 'swr'
import { fetchedMovieData, fetchedTVData } from '@/types/content';
import getRandomItemsFromArray from '@/Hooks/useGetRandomItemsFromArray';



const HomeSection = ({ header, type, apiUrl, seemore }: homesection) => {
  const { data, error, isLoading } = useSWR(apiUrl, fetcher)
  const fetchedData: Array<fetchedTVData | fetchedMovieData> = data
  const displayData: Array<fetchedTVData | fetchedMovieData> = getRandomItemsFromArray(fetchedData, 6) || []
  console.log(displayData) 
  return (
    <section className='home_section'>
     <HomeSectionHeader 
      header= {header}
      type={type}
      link={seemore}
     />
       { isLoading && <div className='loader'><Loader /></div> }
      { displayData && displayData?.length > 0 && <div className='home_section_Collection-wrapper'>
        { displayData && displayData?.length > 0 && displayData.map((each) => {
          if (type === 'movie'){
            const movie = each as fetchedMovieData
            return <ContentBox 
                        key={movie.id}
                        id={movie.id}
                        name={movie.original_title
                        }
                        img={movie.backdrop_path}
                        type={type}
                        yearString={movie.release_date}
                    />
          } else {
            const tv = each as fetchedTVData
            return <ContentBox 
                    key={tv.id}
                    id={tv.id}
                    name={tv.name}
                    img={tv.backdrop_path}
                    type={type}
                    yearString={tv.first_air_date}
                  />
          }    
        }) }
      </div>}
     {/* { isLoading && <div className='loader'><Loader /></div> } */}
    </section>
  )
}

export default HomeSection