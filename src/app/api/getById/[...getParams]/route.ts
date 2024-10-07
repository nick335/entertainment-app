import { getHeaders } from "@/api/apiConfig";
import { getParams } from "@/types/params";
import { NextResponse } from "next/server";

type props = {
 params: getParams
}

export async function GET(request: Request, { params }: props) {
 const apiParams = params.getParams
 try{
  const res = await fetch(`https://api.themoviedb.org/3/${apiParams[0]}/${apiParams[1]}?append_to_response=credits&language=en-US`, {
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

 }catch (error) {
  // Log the error and return a 500 Internal Server Error response
    console.error("Fetch failed:", error);

    return NextResponse.json(
      { error: "Failed to fetch movie data. Please try again later." },
      { status: 500 }
    );
  }
}