import Search from "@/Components/Utility/Form/Search";
import { ReactNode } from "react";

interface props {
 children: ReactNode
}


export default function MovieLayout({ children }:props){
 return (
  <main className="movie">
   <Search placeholder="Search for Movie" />
   {children}
  </main>
 )
}