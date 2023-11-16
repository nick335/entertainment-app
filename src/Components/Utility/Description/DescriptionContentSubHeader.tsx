import React from 'react'

type props = {
 header: string
 content: string | number
}

const DescriptionContentSubHeader = ({ header, content }: props) => {
  return (
    <div className='description_Content_SubDivs_container'>
     <h3>{header}</h3>
     <p>{content}</p>
    </div>
  )
}

export default DescriptionContentSubHeader