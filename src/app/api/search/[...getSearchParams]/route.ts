import { getHeaders } from "@/api/apiConfig"
import { SearchParams } from "@/types/params"
import { NextResponse } from "next/server"

type props = {
 params: SearchParams
}

export async function GET(request: Request, { params}: props) {
 const apiParams = params.getSearchParams
 const requestType = apiParams[0]
 const query = apiParams[1]
 const page = apiParams[2]
 try{
  const res = await fetch(`https://api.themoviedb.org/3/search/${requestType}?query=${query}&include_adult=true&language=en-US&page=${page}`, {
    headers: getHeaders(),
    next: { revalidate: 1 }
   })

   if (!res.ok) {
    return NextResponse.json(
      { error: `Error: ${res.status} ${res.statusText}` },
      { status: res.status }
    );
  }

  const response = await res.json();
  return NextResponse.json({ response });
 }catch(error){
    console.error("Fetch failed:", error);

    return NextResponse.json(
      { error: "Failed to fetch movie data. Please try again later." },
      { status: 500 }
    );
 }
}