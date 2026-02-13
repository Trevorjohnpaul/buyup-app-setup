import React from 'react'
import Container from './Container';
import FooterTop from './FooterTop';
import Logo from './Logo';
import SocialMedia from './SocialMedia';
import { Title } from './ui/text';
import Link from 'next/link'; // Fixed: Import from next/link instead of lucide-react
import { categoriesData } from '@/constants/data';
import { Input } from './ui/input';
import { Button } from './ui/button';

const quickLinksData = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' },
  {title:"Shop",href:"/shop"},
  {title:"FAQs",href:"/faqs"},
  {title:"Privacy Policy",href:"/privacy-policy"}, 
  {title:"Terms & Conditions",href:"/terms-conditions"},
];

const Footer = () => {
  return (
    <footer className=' bg-white border-t '>
      <Container>
        <FooterTop/>
        <div className='py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7'>
          <div className='space-y-3'>
            <Logo/>
            <p className='mt-4 text-sm'>Connect with us through our BuyUp social media channels to be up to speed with our latest products</p>
            <SocialMedia/>  
          </div>
          <div>
            <Title className='text-bold text-black '>Quick Links</Title>
            <ul className='mt-4 space-y-3'> {/* Added some styling for better appearance */}
              {quickLinksData.map((item)=>(
                <li key={item.title}>
                  <Link 
                    href={item.href}
                    className='text-gray-600 hover:text-shop-lightblue transition-colors' // Added styling for better UX
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Title className='text-bold text-black '>Categories</Title>
            <ul className='mt-4 space-y-3'> {/* Added some styling for better appearance */}
              {categoriesData.map((item)=>(
                <li key={item.title}>
                  <Link 
                    href={item.href}
                    className='text-gray-600 hover:text-shop-lightblue transition-colors'
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='space-y-3'>
            <Title className='text-bold text-black '>Newsletter</Title>
            <p className='text-bold text-lightColor '>Subscribe to our newsletter to stay  informed</p>
            <form className='space-y-3'>
              <Input placeholder="Enter your email" type='email' required />
              <Button className='w-full'>Subscribe</Button>
            </form>
          </div>
        </div>
        <div className='py-6 border-t text-center '>
          <p className='text-semibold'>
           &copy; {new Date().getFullYear()} <Logo className='text-sm'/>. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;