import React from 'react'
import ResponsiveImage from '../Image/ResponsiveImage'

const DescriptionImage = () => {
  return (
    <section className='description_ImageSection'>
      <ResponsiveImage 
        src='https://image.tmdb.org/t/p/original//e7Jvsry47JJQruuezjU2X1Z6J77.jpg'
        parentStyle='description_ImageSection_Parent'
        ImageDefaultStyle='description_ImageSection_image'
        ImageBlurredStyle='description_ImageSection_imageBlurred'
      />
    </section>
  )
}

export default DescriptionImage