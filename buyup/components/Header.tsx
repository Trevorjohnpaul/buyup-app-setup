import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import SearchBar from './SearchBar'
import FavouriteButton from './FavouriteButton'
import CartIcon from './Carticon'
import SignInTrigger from './SignIn'
import MobileMenu from './MobileMenu'
import { ClerkLoaded, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Header = () => {
  return (
    <header className='bg-white py-5 '>
      <Container className='flex items-center justify-between text-lightColor'>
        <div className='w-auto md:w-1/3 flex items-center gap-3 justify-start md:gap-0'>
          <MobileMenu />
          <Logo />
        </div>

        <HeaderMenu />
        <div className='w-auto md:w-1/3 flex items-center justify-end gap-5'>
          <SearchBar />
          <CartIcon />
          <FavouriteButton />
          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInTrigger />
            </SignedOut>
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  )
}

export default Header
