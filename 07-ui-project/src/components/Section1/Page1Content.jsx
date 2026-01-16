import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='flex justify-between items-center py-3 px-18 h-[90vh]'>
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content
