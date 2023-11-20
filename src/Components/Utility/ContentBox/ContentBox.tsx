'use client'
import React, { useState, useEffect} from 'react'
import ResponsiveImage from '../Image/ResponsiveImage'
import Movie from '../icons/Movie'
import { displayContent } from '@/types/content'
import useYearFromDateString from '@/Hooks/useYearFromDateString'
import { PiTelevisionBold } from 'react-icons/pi'
import Link from 'next/link'
import { getLocalStorageItem, setLocalStorageItem } from '@/UtilityFunctions/LocalStorage'
import Bookmark from '../icons/Bookmark'
import { useStore } from '@/store/useBookmarksStore'

const ContentBox = ({ name, id, img, yearString, type  }: displayContent) => {
  const { BookmarksData, setBookmarksData } = useStore()
  const linkto = type === 'movie' ? `/movie/${id}` : `/tv/${id}`
  const year = useYearFromDateString(yearString)
  const image = `https://image.tmdb.org/t/p/original${img}`

  const fetchBookmarks = () => {
    const storedBookmarks = getLocalStorageItem<displayContent[]>('Bookmarks')
    if(storedBookmarks){
      setBookmarksData(storedBookmarks)
    }
  }

  const updateBookmarks = (isBookmarked: boolean) => {
    try {
      const storedBookmarks:displayContent[]  = getLocalStorageItem<displayContent[]>('Bookmarks') || [];
  
      if (!isBookmarked) {
        const newBookmark: displayContent = {
          name,
          id,
          img,
          yearString,
          type,
        };
  
        const updatedBookmarksData = [...storedBookmarks, newBookmark];
        setLocalStorageItem('Bookmarks', updatedBookmarksData);
        setBookmarksData(updatedBookmarksData);
      } else {
        const updatedBookmarksData = storedBookmarks.filter(obj => obj.id !== id);
        setLocalStorageItem('Bookmarks', updatedBookmarksData);
        setBookmarksData(updatedBookmarksData);
      }
    } catch (error) {
      console.error('Error updating bookmarks in local storage:', error);
      // Handle the error as needed
    }
  };
  

  useEffect(() => {
    fetchBookmarks()
  }, [])
  
  return (
   <div  className='ContentBox'>
    <div className='ContentBox_ImageDiv'>
      <ResponsiveImage parentStyle='ContentBox_Parent' ImageBlurredStyle='ContentBox_Parent_ImgBlur' ImageDefaultStyle='ContentBox_Parent_Img' src={image} alt={name} link={linkto} />
      <Bookmark id={id} BookMarksData={BookmarksData} updateBookmarks={updateBookmarks
      }  />
    </div>
    <div className='ContentBox_contentDiv'>
     <div className='ContentBox_contentDiv_SubDiv'>
      <p>{year}</p>
      <div>
       <span>.</span>
       { type === 'movie' ?  <Movie /> : <PiTelevisionBold className='ContentBox_contentDiv_SubDiv_icon' />}
      </div>
      <p>{type}</p>
     </div>
     <h3 className='ContentBox_contentDiv_header'><Link href={linkto}>{name}</Link></h3>
    </div>
   </div>
  )
}

export default ContentBox