import { redirect } from "next/navigation"


const MovieNowplayingPage = async () => {
  redirect('/movie/nowplaying/1')
}

export default MovieNowplayingPage