import Search from "@/Components/Utility/Form/Search";
import { ReactNode } from "react";

interface props {
 children: ReactNode
}


export default function TvLayout({ children }:props){
 return (
  <main className="tv">
   <Search placeholder="Search for Tv series" />
   {children}
  </main>
 )
}