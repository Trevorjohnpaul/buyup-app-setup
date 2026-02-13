import React from 'react'
import { SignInButton } from '@clerk/nextjs'

const SignIn = () => {
  return (
    <SignInButton mode='modal'>
      <button className='text-sm font-bold text-shop-lightblue not-last:font-semibold hover:text-lightOrange'>Login</button>
    </SignInButton>
  )
}

export default SignIn
