import { getHeaders } from "@/api/apiConfig";
import { apiMovieParams, } from "@/types/params";

type props = {
 params: apiMovieParams
}

export async function GET(request: Request ,{ params }: props) {
 const apiParams = params.getMovieParams
 const res = await fetch (`https://api.themoviedb.org/3/movie/${apiParams[0]}?language=en-US&page=${apiParams[1]}`, {
  headers: getHeaders(),
  next: { revalidate: 1 }
 })
 const response = await res.json()

 return Response.json({ response})
}