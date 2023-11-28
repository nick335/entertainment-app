import { getHeaders } from "@/api/apiConfig"
import { SearchParams } from "@/types/params"

type props = {
 params: SearchParams
}

export async function GET(request: Request, { params}: props) {
 const apiParams = params.getSearchParams
 const requestType = apiParams[0]
 const query = apiParams[1]
 const page = apiParams[2]
 const res = await fetch(`https://api.themoviedb.org/3/search/${requestType}?query=${query}&include_adult=true&language=en-US&page=${page}`, {
  headers: getHeaders(),
  next: { revalidate: 1 }
 })
 const response = await res.json()

 return Response.json({ response })
}