import { redirect } from 'next/navigation'
import React from 'react'

const TvGenrepage = async () => {
 redirect('/tv/genre/16?name=Animation&page=1')
  return null
}

export default TvGenrepage