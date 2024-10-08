import { getHeaders } from "@/api/apiConfig"
import { NextResponse } from "next/server"


export async function GET() {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/genre/tv/list?language=en`, {
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
    console.error(error)

    return NextResponse.json(
      { error: "Failed to fetch tv data. Please try again later." },
      { status: 500 } 
    )
  }
}