import Link from 'next/link'
import React from 'react'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link href="/" className="inline-flex">
      <h2
        className={cn(
          "text-2xl text-shop-lightblue font-black tracking-wider hover:text-shop_orange",
          className
        )}
      >
        Buy
        <span className="text-shop_orange hover:text-shop-lightblue">Up</span>
      </h2>
    </Link>
  )
}

export default Logo
