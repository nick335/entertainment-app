import { fetchedTVData } from '@/types/content'
import ContentBox from '../ContentBox/ContentBox'
import React from 'react'

type props = {
 data: Array<fetchedTVData>
}

const TvsCollectionDisplay = ({ data }: props) => {
 return (
   <div className='tv_collection'>
    { data.map((tv) => {
       return <ContentBox 
                key={tv.id}
                id={tv.id}
                name={tv.name}
                img={tv.backdrop_path || tv.poster_path}
                type='tv'
                yearString={tv.first_air_date}
              />
     }) }
   </div>
 )
}

export default TvsCollectionDisplay