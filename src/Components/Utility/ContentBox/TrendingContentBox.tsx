import React from 'react'
import ResponsiveImage from '../Image/ResponsiveImage'
import Movie from '../icons/Movie'

const TrendingContentBox = () => {
  return (
    <div  className='TrendingContentBox'>
     <ResponsiveImage parentStyle='TrendingContentBox_Parent' ImageBlurredStyle='TrendingContentBox_Parent_ImgBlur' ImageDefaultStyle='TrendingContentBox_Parent_Img' alt='name' src='wdw' />
     <div className='TrendingContentBox_contentDiv'>
      <div className='TrendingContentBox_contentDiv_SubDiv'>
       <p>2023</p>
       <div>
        <span>.</span>
        <Movie />
       </div>
       <p>Movie</p>
      </div>
      <h3 className='TrendingContentBox_contentDiv_header'>The Excorcist: Believer</h3>
     </div>
    </div>
  )
}

export default TrendingContentBox