
export async function GET() {
 const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en`, {
  method: 'GET',
  headers: {
   accept: 'application/json',
    Authorization: process.env.API_READ_ACCESSTOKEN ? process.env.API_READ_ACCESSTOKEN : ''
   
  },
 })
 const genres = await res.json()

 return Response.json({ genres })
}