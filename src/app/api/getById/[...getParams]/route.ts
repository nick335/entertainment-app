import { getHeaders } from "@/api/apiConfig";
import { getParams } from "@/types/params";

type props = {
 params: getParams
}

export async function GET(request: Request, { params }: props) {
 const apiParams = params.getParams
 const res = await fetch(`https://api.themoviedb.org/3/${apiParams[0]}/${apiParams[1]}?append_to_response=credits&language=en-US`, {
  headers: getHeaders(),
  next: { revalidate: 1 }
 })
 const response = await res.json()

 return Response.json({ response })
}