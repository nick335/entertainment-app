const fetcher = (url: string) => 
 fetch(url, {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: process.env.NEXT_PUBLIC_API_READ_ACCESSTOKEN ? process.env.NEXT_PUBLIC_API_READ_ACCESSTOKEN : ''
  }
 }).then((response) => {
  if(!response.ok){
   throw new Error(`HTTP error! Status: ${response.status}`)
  }
  return response.json()
 }).then((data) => data?.results)

 export default fetcher
 