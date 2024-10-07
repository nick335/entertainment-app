import TvsCollectionDisplay from '@/Components/Utility/CollectionsDisplay/TvsCollection'
import PaginationController from '@/Components/Utility/PaginationController/PaginationController'
import { fetchedTVData } from '@/types/content'
import { nameParams, searchPageSearchParams } from '@/types/params'
import React from 'react'

type props = {
 params: nameParams
 searchParams: searchPageSearchParams
}

const TvSearchPage = async ({params, searchParams}: props) => {
 const { name } = params
 const pageNumber = searchParams.page || 1
 const res = await fetch(`${process.env.APP_URL}/api/search/tv/${name}/${pageNumber}`)

 const result = await res.json()
 const data = result.response
 const TvsData: fetchedTVData[]  = data.results
 if(result.error) return <h3>{result.error}</h3>
  return (
    <section>
     <h3 className='movie_collectionHeader'>Found {data.total_results} results for {name}</h3>
     <TvsCollectionDisplay data={TvsData} />
     <PaginationController path={`movie/search/${name}?page=`} currentPage={pageNumber} TotalPages={data.total_pages} />
    </section>
  )
}

export default TvSearchPage