'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

interface props {
 parentStyle: string,
 ImageBlurredStyle: string,
 ImageDefaultStyle: string,
 src: string,
 alt: string,
 link?: string
}

const ResponsiveImage = ({ parentStyle, ImageBlurredStyle, ImageDefaultStyle, src, alt, link }: props) => {
  const navigate = useRouter()
 const [loading, setLoading] = useState(true)
 const  handleRouteToDescPage = () => {
  navigate.push(`${link}`)
 }
  return (
    <div className={parentStyle}>
     <Image src={src} alt={alt} className={` ${loading ? ImageBlurredStyle : ImageDefaultStyle} `} onLoadingComplete={() => setLoading(false)} fill={true} onClick={link ? handleRouteToDescPage : () => null} />
    </div>
  )
}

export default ResponsiveImage