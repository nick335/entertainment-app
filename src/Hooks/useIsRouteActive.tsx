import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function useIsRouteActive(route: string){
 const pathname = usePathname()
 const [isActive, setIsActive] = useState(false)

 useEffect(() => {
  setIsActive(pathname === route)
 }, [route, pathname])
 
 return isActive ? 'nav_Links_IconActive' : 'nav_Links_IconDefault'
}