import { NextResponse } from "next/server"

export async function GET() {
 try {
  const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en`, {
    method: 'GET',
    headers: {
     accept: 'application/json',
      Authorization: process.env.API_READ_ACCESSTOKEN ? process.env.API_READ_ACCESSTOKEN : ''
     
    },
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
    { error: "Failed to fetch movie data. Please try again later." },
    { status: 500 }
  );
 }
}