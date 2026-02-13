"use client";
import React from "react";
import Link from "next/link";
import { headerData } from "@/constants/data";
import { usePathname } from "next/navigation";

const HeaderMenu = () => {
  const pathname =usePathname();
  
  return (
    <div className="hidden md:inline-flex w-1/3 items-center gap-7 text-sm font-semibold text-darkGray">
      {headerData.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className={`group relative inline-flex pb-1 hover:text-shop-lightblue transition-colors duration-300 ${pathname === item.href ? "text-shop-lightblue" : ""}`}
        >
          {item.title}
          <span className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-full scale-x-0 bg-shop_darkblue transition-transform duration-300 group-hover:scale-x-100" />
        </Link>
      ))}
    </div>
  );
};

export default HeaderMenu;
