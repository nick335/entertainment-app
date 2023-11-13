import { getHeaders } from "@/api/apiConfig"
import { apiTvParams } from "@/types/params"


type props = {
 params: apiTvParams
}

export async function GET(request: Request, { params }: props) {
 const apiParams = params.getTvParams
 const res = await fetch(`https://api.themoviedb.org/3/tv/${apiParams[0]}?language=en-US&page=${apiParams[1]}`, {
  headers: getHeaders(),
  next: { revalidate: 1 }
 })
 const response = await res.json()

 return Response.json({ response })
}