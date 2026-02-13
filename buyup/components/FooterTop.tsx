import React from 'react'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

interface ContactItemData {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

const data:ContactItemData[]=[
  {
    title:"Visit Us",
    subtitle:" Kaunda Street, Nairobi",
    icon:(
    <MapPin className="h-6 w-6 text-darkGray group-hover:text-primary transition-colors" />
  ),
  },
  {
    title:"Call Us",
    subtitle:"+254 700 123 456",
    icon:(
      <Phone className="h-6 w-6 text-darkGray group-hover:text-primary transition-colors" />
    ),
  },
   { 
    title:"Email Us",
    subtitle:"info@buyup.com",
    icon:(
      <Mail className="h-6 w-6 text-darkGray group-hover:text-primary transition-colors" />
    ),
  },
  {
    title:"Working Hours",
    subtitle:"Mon - Fri: 9:00 AM - 6:00 PM",
    icon:(<Clock className="h-6 w-6 text-darkGray group-hover:text-primary transition-colors" />),
  }

 
]





const FooterTop = () => {
  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 border-b'>
      {data?.map((item,index)=>(
        <div key={index} className='flex items-center gap-3 hover:bg-gray-100 p-4 transition-colors'>
          {item?.icon}
       <div>
        <h3 className='font-semibold text-lightColor' >{item?.title}</h3>
        <p className='text-sm mt-1'>{item?.subtitle}</p>
       </div>
        </div>
      ))}
    </div>
  );
};
const ContactItem=({ item }: { item: ContactItemData })=>{
  return(
    <div><p>hello</p></div>
  );
}

export default FooterTop
