import React from 'react'
import Link from "next/link";
import { FacebookIcon } from 'lucide-react';
const page = () => {
  return (
    <div className="col-span-3 space-y-6">
      <h1 className="text-4xl font-bold">Keth Mark Berou</h1>
      <div className='flex items-center gap-2'>
        <h1>Age:</h1>
        <span className='text-muted-foreground'>20</span>
      </div>
      <div className='flex items-center gap-2'>
        <h1>Address:</h1>
        <span className='text-muted-foreground'>Canhaway Guindulman Bohol</span>
      </div>
      <div className='flex items-center gap-2'>
        <h1>Graduated:</h1>
        <span className='text-muted-foreground'>Bohol island state university - Candijay </span>
      </div>
      <div className='flex items-center gap-2'>
        <h1>Course:</h1>
        <span className='text-muted-foreground'>Bachelor of science in computer science</span>
      </div>
      
      <div>
      <Link className="text-gray-400 hover:text-white" href="https://www.facebook.com/kethmark.pj">
          <FacebookIcon className="inline mr-2" />
          follow me on facebook
        </Link>
      </div>
    </div>
  )
}

export default page