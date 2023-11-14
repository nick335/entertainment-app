import Link from 'next/link'
import React from 'react'

interface props {
  header: string,
  type: string,
  link: string
}

const HomeSectionHeader = ({ header, type, link}: props) => {
  return (
    <div className='home_section_HeaderDiv'>
     <div className='home_section_HeaderDiv_left'>
      <h3 className='home_section_HeaderDiv_left_h3'>{header}</h3>
      <p className={`${type === 'movie' ? 'home_section_HeaderDiv_left_movie' : 'home_section_HeaderDiv_left_tv'}`}>{type}</p>
     </div>
     <p className='home_section_HeaderDiv_link'><Link href={link}>see more</Link></p>
    </div>
  )
}

export default HomeSectionHeader