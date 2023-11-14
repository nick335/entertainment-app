import React from 'react'
import { GoLink } from 'react-icons/go'
import IDMB from '../icons/IDMB'

const DescriptionButtons = () => {
  return (
    <div className='description_Content_btns'>
     <button className='description_Content_btns_btn'>website <GoLink className='description_Content_btns_btn_icon'/></button>
     <button className='description_Content_btns_btn'>IMDB <IDMB /></button>
    </div>
  )
}

export default DescriptionButtons