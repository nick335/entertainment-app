import React from 'react'
import ResponsiveImage from '../Image/ResponsiveImage'

type props = {
 src: string
 alt: string
}

const DescriptionImage = ({src, alt}: props) => {
  const image = `https://image.tmdb.org/t/p/original${src}`
  return (
    <section className='description_ImageSection'>
      <ResponsiveImage 
        src={image}
        parentStyle='description_ImageSection_Parent'
        ImageDefaultStyle='description_ImageSection_image'
        ImageBlurredStyle='description_ImageSection_imageBlurred'
        alt={alt}
      />
    </section>
  )
}

export default DescriptionImage