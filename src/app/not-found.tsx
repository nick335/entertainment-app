import Link from "next/link";

export default function NotFound(){
 return(
  <main className="NotFound">
   <h3 className="NotFound_header">404 | page not found</h3>
   <p>The Page you are looking for does not exist</p>
   <Link  href={'/'}> Go to Home page</Link>
  </main>
 )
}