import TvsCollectionDisplay from '@/Components/Utility/CollectionsDisplay/TvsCollection'
import PaginationController from '@/Components/Utility/PaginationController/PaginationController'
import { fetchedTVData } from '@/types/content'
import { idParams } from '@/types/params'
import { notFound } from 'next/navigation'
import React from 'react'

type props = {
 params: idParams
}

const TvTopratedpages = async ({ params }: props) => {
 const pageNumber = `${params.id}`
 const containsOnlyNumbers: boolean = /^\d+$/.test(pageNumber)
 if(!containsOnlyNumbers){
  notFound()
 }
 const response = await fetch (`${process.env.APP_URL}/api/tv/top_rated/${params.id}`)
 const result = await response.json()
 const data = result.response
 const tvsData: Array<fetchedTVData> = data.results

 if(data.total_results === 0){
  notFound()
 }
  return (
    <section>
     <h3 className='tv_collectionHeader'>Top Rated TV Series</h3>
     <TvsCollectionDisplay data={tvsData} />
     <PaginationController 
       currentPage={params.id || 1}
       TotalPages={data.total_pages}
       path={`/tv/toprated/`}
     />
    </section>
  )
}

export default TvTopratedpages