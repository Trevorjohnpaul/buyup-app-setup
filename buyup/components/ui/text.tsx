import React from "react"
import { cn } from "@/lib/utils"

export const Title=({
    children,
    className,
}:
  {
        children:React.ReactNode;
        className?:string; 
    })=>{
    return <h2 className={cn("text-2xl  md:text-3xlfont-semibold text-shop_orange tracking-wide ",className)}>{children}</h2>
}
