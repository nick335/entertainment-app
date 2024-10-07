'use client'
import React from 'react'
import { MdLocalMovies, MdMovie } from 'react-icons/md'
import { PiTelevisionBold, PiGridFourFill } from 'react-icons/pi'
import { HiOutlineBookmark, HiUserCircle  } from 'react-icons/hi'
import Link from 'next/link'
import useIsRouteActive from '@/Hooks/useIsRouteActive'

const Aside = () => {
  const isRouteActive = useIsRouteActive
  return (
    <nav  className='nav'>
      <MdMovie className='nav_Logo' />
      <div className='nav_Links'>
        
        <Link href='/'>
          <PiGridFourFill  className={` ${isRouteActive('/')} nav_Links_Icon`} />
        </Link>
        <Link href='/movie'>
          <MdLocalMovies  className={` ${isRouteActive('/movie')} nav_Links_Icon`} />
        </Link>
        <Link href='/tv'>
          <PiTelevisionBold  className={` ${isRouteActive('/tv')} nav_Links_Icon`} />
        </Link>
        <Link href='/bookmarks'>
          <HiOutlineBookmark  className={` ${isRouteActive('/bookmarks')} nav_Links_Icon`} />
        </Link>
      </div>
      <HiUserCircle className='nav_User' />
    </nav>
  )
}

export default Aside;