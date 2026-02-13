import { Facebook, Instagram, Link, Twitter, Youtube } from 'lucide-react'
import React from 'react'
import { Tooltip, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import { cn } from '@/lib/utils';
 
interface Props{
    className?:string;
    iconClassName?:string;
    tooltipClassName?:string;
}
const socialLink=[
    {
        title:'Facebook',
        href:'https://www.facebook.com/',
        icon:<Facebook className='w-5 h-5'/>
    },
     {
        title:'Instagram',
        href:'https://www.instagram.com/',
        icon:<Instagram className='w-5 h-5'/>
    },
     {
        title:'Twitter',
        href:'https://www.twitter.com/',
        icon:<Twitter className='w-5 h-5'/>
    },
     {
        title:'Youtube',
        href:'https://www.youtube.com/',
        icon:<Youtube className='w-5 h-5'/>
    }

]



const SocialMedia = ({className, iconClassName, tooltipClassName}:Props) => {
  return (
   <TooltipProvider>
    <div className={cn("flex items-center gap-4", className)}>
        {socialLink?.map((item)=>(
            <Tooltip key={item?.title}>

                <TooltipTrigger className={tooltipClassName}>
                    <a 
                    key={item?.title}
                    target='_blank'
                    rel='noopener noreferrer'
                    href={item?.href} 
                    className={cn("p-2 "
                
                    )}>
                    {item?.icon}
                    </a>
                </TooltipTrigger>
            </Tooltip>
        ))}
    </div>
   </TooltipProvider>
  )
}

export default SocialMedia
