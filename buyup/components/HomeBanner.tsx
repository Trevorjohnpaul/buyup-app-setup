import React from 'react'
import { Title } from './ui/text'
import Link from 'next/link'
import Image from 'next/image'

const HomeBanner = () => {
  return (
    <div
      className="
        py-16 md:py-0
        bg-lightGray/55
        backdrop-blur-sm
        rounded-2xl
        px-10 lg:px-24
        flex items-center justify-between
        overflow-hidden
      "
    >
      
      <div className="space-y-5 max-w-lg">
        <Title>
          Get Upto 50% Off this week <br />
          Head to our store and grab the best deals
        </Title>

        <Link
          href="/shop"
          className="
            bg-shop-lightblue
            text-white
            px-5 py-2
            rounded-full
            inline-block
            mt-6
            hover:opacity-90
            transition
          "
        >
          Shop Now
        </Link>
      </div>

      <div className="relative hidden md:block">
        <Image
          src="/images/banner/banner1.jpg"
          alt="banner"
          width={320}
          height={320}
          priority
          className="
            object-contain
            drop-shadow-none
            mix-blend-multiply
            select-none
          "
        />
      </div>

    </div>
  )
}

export default HomeBanner
