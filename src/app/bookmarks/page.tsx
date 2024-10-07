'use client'
import Search from '@/Components/Utility/Form/Search'
import React, { useEffect } from 'react'
import { displayContent } from '@/types/content'
import { getLocalStorageItem } from '@/UtilityFunctions/LocalStorage'
import { useStore } from '@/store/useBookmarksStore'
import BookmarkCollection from '@/Components/Utility/CollectionsDisplay/BookmarkCollection'


const BookMarks = () => {
  const {BookmarksData, setBookmarksData} = useStore()

  useEffect(() => {
    const storedBookmarks = getLocalStorageItem<displayContent[]>('Bookmarks')
    if(storedBookmarks){
      setBookmarksData(storedBookmarks)
    }
  }, [setBookmarksData])
  return (
    <div>
      <Search placeholder='Search for BookMarks' />
      <h3 className='movie_collectionHeader'>Bookmarks</h3>
      <BookmarkCollection data={BookmarksData} />
    </div>
  )
}

export default BookMarks