import { redirect } from 'next/navigation'

const MovieGenrepage = async () => {
 redirect('/tv/genre/28?name=Action&page=1')
  return null
}

export default MovieGenrepage