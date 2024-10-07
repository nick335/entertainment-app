import DescriptionImage from '@/Components/Utility/Description/DescriptionImage'
import TvDescriptionContent from '@/Components/Utility/Description/TvDescriptionContent'
import Similar from '@/Components/Utility/Similar/Similar'
import { TVShow } from '@/types/content'
import { idParams } from '@/types/params'
import { notFound } from 'next/navigation'
import React from 'react'

type props = {
  params: idParams
}

const DescriptionTvSeries = async ({ params }: props) => {
  const page = `${params.id}`
  const containsOnlyNumbers: boolean = /^\d+$/.test(page)
  if(!containsOnlyNumbers){
    notFound()
  }
  const res = await fetch(`${process.env.APP_URL}/api/getById/tv/${params.id}`, {
    next: { revalidate: 1 }
  })
  const result = await res.json()
  const TvData: TVShow = result.response
  if(result.error) return <h3>{result.error}</h3>
  return (
    <>
      <section className='description'>
      <DescriptionImage 
        src={TvData.poster_path || TvData.backdrop_path }
        alt={TvData.name}
      />
      <TvDescriptionContent 
          title={TvData.name}
          season={TvData.number_of_seasons}
          tagline={TvData.tagline}
          cast={TvData.credits.cast}
          webLink={TvData.homepage}
          synopsis={TvData.overview}
          status={TvData.status}
          genre={TvData.genres}
          language={TvData.original_language}
          ratings={TvData.vote_average}
          year={TvData.first_air_date}
          idmbLink={null}
      />
      </section>
      <Similar type='tv' id={TvData.id} />
    </>
  )
}

export default DescriptionTvSeries