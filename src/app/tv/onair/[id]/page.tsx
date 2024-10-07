import TvsCollectionDisplay from '@/Components/Utility/CollectionsDisplay/TvsCollection'
import PaginationController from '@/Components/Utility/PaginationController/PaginationController'
import { fetchedTVData } from '@/types/content'
import { idParams } from '@/types/params'
import { notFound } from 'next/navigation'
import React from 'react'

type props = {
 params: idParams
}

const TvOnairpages = async ({ params }: props) => {
 const pageNumber = `${params.id}`
 const containsOnlyNumbers: boolean = /^\d+$/.test(pageNumber)
 if(!containsOnlyNumbers){
  notFound()
 }
 const response = await fetch (`${process.env.APP_URL}/api/tv/on_the_air/${params.id}`)
 const result = await response.json()
 const data = result.response
 const tvsData: Array<fetchedTVData> = data.results

 if(data.total_results === 0){
  notFound()
 }
 if(result.error) return <h3>{result.error}</h3>
  return (
    <section>
     <h3 className='tv_collectionHeader'>TV Series On The Air</h3>
     <TvsCollectionDisplay data={tvsData} />
     <PaginationController 
       currentPage={params.id || 1}
       TotalPages={data.total_pages}
       path={`/tv/onair/`}
     />
    </section>
  )
}

export default TvOnairpages