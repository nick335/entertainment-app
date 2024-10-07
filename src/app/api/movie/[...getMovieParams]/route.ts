import { getHeaders } from "@/api/apiConfig";
import { apiMovieParams, } from "@/types/params";
import { NextResponse } from "next/server";

type props = {
 params: apiMovieParams
}

export async function GET(request: Request ,{ params }: props) {
 const apiParams = params.getMovieParams
 try{
  const res = await fetch (`https://api.themoviedb.org/3/movie/${apiParams[0]}?language=en-US&page=${apiParams[1]}`, {
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