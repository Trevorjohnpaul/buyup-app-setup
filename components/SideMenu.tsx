import React, { FC } from 'react'
import Logo from './Logo';
import { headerData } from '@/constants/data';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SocialMedia from './SocialMedia';


interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const SideMenu:FC<SidebarProps>= ({isOpen, onClose}) => {
   const pathname=usePathname();
    return (
    <div className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50  text-white/80 shadow-xl ${isOpen ? 'translate-x-0' : '-translate-x-full'} hoverEffect`}>
        
      <div className='min-w-72 max-w-96 bg-black h-screen p-10 border-r border-r-shop-lightblue flex flex-col gap-6'>
        <div className='flex  items-center justify-between gap-5'> 
          <Logo className='text-white'/>
          <button
          onClick={onClose}
           className='hover:text-lightOrange'>
            X
          </button>
        </div>

        <ul className="flex flex-col gap-4">
          {headerData?.map((item) => (
            <li key={item?.title}>
              <Link href={item.href} className={`hover:text-lightOrange ${pathname===item.href ? 'text-white' : ''}`}>
                {item?.title}
              </Link>
            </li>
          ))}
        </ul>
         <SocialMedia/>
      </div>
        
    </div>
   
  );
};

export default SideMenu;
