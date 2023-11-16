import React from 'react'
import DescriptionContentSubHeader from './DescriptionContentSubHeader'
import DescriptionContentgenres from './DescriptionContentgenres'
import DescriptionContentCasts from './DescriptionContentCasts'
import DescriptionButtons from './DescriptionButtons'
import StarRating from '../rating/StarRating'
import { Cast, Genre } from '@/types/content'
import useYearFromDateString from '@/Hooks/useYearFromDateString'
import ISO6391 from 'iso-639-1';
type props = {
 tagline: string,
 title: string,
 ratings: number,
 season: number,
 status: string,
 language: string,
 year:string,
 synopsis: string,
 idmbLink: string | null,
 webLink: string | null,
 genre: Genre[]
 cast: Cast[]
}

const TvDescriptionContent = ({ tagline, title, ratings, season, status, language, year, synopsis, idmbLink, webLink, genre, cast }: props) => {
 const actualrating = Math.ceil(ratings / 2 * 10) / 10
 const languageName: string = ISO6391.getName(language);

  return (
   <section className='description_Content'>
    <div className='description_Content_HeaderDiv'>
     <h2 className='description_Content_HeaderDiv_header'>{title}</h2>
     <p className='description_Content_HeaderDiv_qoute'>{ tagline }</p>
    </div>
    <div className='description_Content_ratings'>
     <h3 className='description_Content_ratings_header'>{actualrating}</h3>
     <StarRating rating={actualrating}/>
    </div>
    <div className='description_Content_SubDivs'>
     <DescriptionContentSubHeader header='Language' content={languageName} />
     <DescriptionContentSubHeader header='First Air' content={year} />
     <DescriptionContentSubHeader header='Seasons' content={season}/>
     <DescriptionContentSubHeader header='Status' content={status} />
    </div>
    <DescriptionContentgenres genres={genre} link={'/tv/genre'} />
    <div className='description_Content_SynopsisDiv'>
     <h3 className='description_Content_subHeaders'>Synopsis</h3>
     <p className='description_Content_SynopsisDiv_para'>{synopsis}</p>
    </div>
    <DescriptionContentCasts casts={cast} />
    <DescriptionButtons websiteLink={webLink} imdbLink={idmbLink} />
   </section>
  )
}

export default TvDescriptionContent