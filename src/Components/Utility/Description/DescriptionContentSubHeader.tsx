import React from 'react'

type props = {
 header: string
 content?: string
}

const DescriptionContentSubHeader = ({ header }: props) => {
  return (
    <div className='description_Content_SubDivs_container'>
     <h3>{header}</h3>
     <p>118 min</p>
    </div>
  )
}

export default DescriptionContentSubHeader