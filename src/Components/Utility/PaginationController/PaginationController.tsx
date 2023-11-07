import Link from 'next/link'
import React from 'react'
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'

interface props {
 currentPage: number
 TotalPages: number
 path: string
}


const PaginationController = ({ currentPage, TotalPages, path  }: props) => {
 const currentPageValue = currentPage * 1
 const prevPage = currentPageValue === 1 ? 1 : currentPage  - 1
 const nextPage =  currentPageValue + 1

  return (
    <div className='PaginationModule'>
     <div className='PaginationModule_Container'>
      <Link href={`${path}${prevPage}`}>
       <div className={`PaginationModule_Container_leftControl ${currentPageValue === 1 ? '': 'PaginationModule_Container_ControlHover'  }`}>
        <HiArrowNarrowLeft />
        <h3>Prev</h3>
       </div>
      </Link>
      
      <div className='PaginationModule_Container_Display'>
       <p>Page {currentPage} of {TotalPages}</p>
      </div>
      <Link href={`${path}${nextPage}`}>
       <div className='PaginationModule_Container_rightControl PaginationModule_Container_ControlHover'>
        <h3>Next</h3>
        <HiArrowNarrowRight />
       </div>
      </Link>
      
     </div>
    </div>
  )
}

export default PaginationController