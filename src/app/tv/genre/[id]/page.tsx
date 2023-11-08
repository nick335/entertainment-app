import ContentBox from '@/Components/Utility/ContentBox/ContentBox'
import PageLimit from '@/Components/Utility/Notification/PageLimit'
import PaginationController from '@/Components/Utility/PaginationController/PaginationController'
import { fetchedTVData } from '@/types/content'
import { notFound } from 'next/navigation'
import React from 'react'

type searchparams = {
  name?: string
  page?: number
}

type props = {
  params: {
   id: number
  };
  searchParams: searchparams
 }

const Page = async ({ params, searchParams }:props ) => {
  const pageNumber = `${searchParams.page}`
  const containsOnlyNumbers: boolean = /^\d+$/.test(pageNumber)
  if(!searchParams.name || !searchParams.page || !containsOnlyNumbers){
    notFound()
  }else if(searchParams.page > 500){
    return <PageLimit />
  }
  const response = await fetch(`https://api.themoviedb.org/3/discover/tv?include_adult=true&language=en-US&page=${searchParams.page}&sort_by=popularity.desc&with_genres=${params.id}`, {
    headers: {
      accept : 'application/json',
      Authorization : process.env.API_READ_ACCESSTOKEN ? process.env.API_READ_ACCESSTOKEN : ''
    }, 
    next: { revalidate: 1 }
  })
  const data = await response.json()
  const tvsData: Array<fetchedTVData> = data.results

  if(data.total_results === 0){
    notFound()
  }
  return (
    <section>
      <h3 className='tv_genres_collectionHeader'>{searchParams.name}</h3>
      <div className='tv_genres_collection'>
          { tvsData.map((tv) => {
            return <ContentBox 
                      key={tv.id}
                      id={tv.id}
                      name={tv.original_name}
                      img={tv.backdrop_path || tv.poster_path}
                      type={'tv'}
                      yearString={tv.first_air_date}
                    />
          })}
      </div>
      <PaginationController 
          currentPage={searchParams.page || 0}
          TotalPages={data.total_pages}
          path={`/tv/genre/${params.id}?name=${searchParams.name}&page=`} 
      />
    </section>
  )
}

export default Page;