import React from 'react'
import { GoLink } from 'react-icons/go'
import IDMB from '../icons/IDMB'
import Link from 'next/link'

type props = {
 websiteLink: string | null
 imdbLink: string | null
}

const DescriptionButtons = ({websiteLink, imdbLink}: props) => {
  return (
    <div className='description_Content_btns'>
     {websiteLink && <Link href={websiteLink} className='description_Content_btns_btn'>website <GoLink className='description_Content_btns_btn_icon'/></Link>}
     {imdbLink && <Link href={imdbLink} className='description_Content_btns_btn'>IMDB <IDMB /></Link>}
    </div>
  )
}

export default DescriptionButtons