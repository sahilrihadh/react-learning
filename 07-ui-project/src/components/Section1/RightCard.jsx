import React from 'react'
import { ArrowUpRight } from 'lucide-react';   
import RightCardContent from './RightCardContent';

const RightCard = (props) => {
  return (
    <div id='rightCard' className='overflow-hidden shrink-0 relative h-full w-80 bg-amber-300 rounded-2xl'>
      <img className='w-full h-full object-cover' src={props.img} alt="" />

      <RightCardContent id={props.id} tag={props.tag} intro={props.intro} />
    </div>
  )
}

export default RightCard
