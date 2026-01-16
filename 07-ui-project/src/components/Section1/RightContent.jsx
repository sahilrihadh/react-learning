import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='rightContent' className='h-full w-2/3 p-10 flex justify-start nowrap overflow-x-auto gap-5'>

        {props.users.map(function(elem, idx){
            return <RightCard key={idx} id={idx} img={elem.img} intro={elem.intro} tag={elem.tag} /> 
        })}
    </div>
  )
}

export default RightContent
