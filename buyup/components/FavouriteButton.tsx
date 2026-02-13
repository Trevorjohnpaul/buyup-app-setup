import Link from "next/link";
import { Heart } from "lucide-react";
import React from "react";

const FavouriteButton = () => {
  return (
    <Link href="/favourites" className="group relative">
      <Heart className="h-5 w-5 transition-colors duration-300 hover:text-shop_orange" />
      <span className="absolute -top-2 -right-2 bg-shop_orange text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
    </Link>
  );
};

export default FavouriteButton;
