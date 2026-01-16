import React from 'react'
import { ArrowUpRight } from 'lucide-react';   

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-7 flex flex-col justify-between'>
        <h2 className='bg-white rounded-full text-2xl font-bold h-12 w-12 flex items-center justify-center'>{props.id+1}</h2>
        <div>
            <p className='text-lg leading-normal text-white'>{props.intro}</p>
            <div className='flex mt-4'>
                <button className='bg-blue-600 text-white font-medium rounded-full px-7 py-2 text-sm'>{props.tag}</button>
                <button className='bg-blue-600 text-white font-medium rounded-full px-2 py-2 text-sm'><ArrowUpRight size={20} /></button>
            </div>
        </div>
      </div>
  )
}

export default RightCardContent
