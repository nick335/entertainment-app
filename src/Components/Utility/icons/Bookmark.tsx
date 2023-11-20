import React, { useEffect, useState } from 'react'
import { displayContent } from '@/types/content'

type props = {
  BookMarksData: displayContent[]
  updateBookmarks: (isBookmarked: boolean) => void
  id: number
}

const Bookmark = ({ BookMarksData, updateBookmarks, id }: props) => {
  const [isBookmarked, setIsBookmarked] = useState(false)

  useEffect(() => {
    const foundBookmark = BookMarksData.find(obj => obj.id === id);
    setIsBookmarked(!!foundBookmark);
  }, [BookMarksData, id])
  return (
   <svg stroke="currentColor" fill='currentColor' stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" className={`ContentBox_ImageDiv_bookmark ${isBookmarked ? 'ContentBox_ImageDiv_bookmark_active' : 'ContentBox_ImageDiv_bookmark_default' }`} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" onClick={() => updateBookmarks(isBookmarked)} ><path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
  )
}

export default Bookmark