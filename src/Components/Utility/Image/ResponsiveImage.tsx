'use client'
import Image from 'next/image'
import { useState } from 'react'

interface props {
 parentStyle: string,
 ImageBlurredStyle: string,
 ImageDefaultStyle: string,
 src: string,
}

const ResponsiveImage = ({ parentStyle, ImageBlurredStyle, ImageDefaultStyle, src }: props) => {
 const [loading, setLoading] = useState(true)
  return (
    <div className={parentStyle}>
     <Image src={src} alt='iamge' className={` ${loading ? ImageBlurredStyle : ImageDefaultStyle} `} onLoadingComplete={() => setLoading(false)} fill={true} />
    </div>
  )
}

export default ResponsiveImage