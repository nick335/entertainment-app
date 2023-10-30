import React from 'react'
import ResponsiveImage from '../Image/ResponsiveImage'
import Movie from '../icons/Movie'
import { displayContent } from '@/types/content'
import useYearFromDateString from '@/Hooks/useYearFromDateString'
import { PiTelevisionBold } from 'react-icons/pi'

const ContentBox = ({ name, id, img, yearString, type  }: displayContent) => {
  const year = useYearFromDateString(yearString)
  const image = `https://image.tmdb.org/t/p/original${img}`
  return (
   <div  className='ContentBox'>
    <ResponsiveImage parentStyle='ContentBox_Parent' ImageBlurredStyle='ContentBox_Parent_ImgBlur' ImageDefaultStyle='ContentBox_Parent_Img' src={image}  />
    <div className='ContentBox_contentDiv'>
     <div className='ContentBox_contentDiv_SubDiv'>
      <p>{year}</p>
      <div>
       <span>.</span>
       { type === 'movie' ?  <Movie /> : <PiTelevisionBold className='ContentBox_contentDiv_SubDiv_icon' />}
      </div>
      <p>{type}</p>
     </div>
     <h3 className='ContentBox_contentDiv_header'> {name} </h3>
    </div>
   </div>
  )
}

export default ContentBox