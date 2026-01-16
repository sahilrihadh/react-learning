import React from 'react'
import Section1 from "./components/Section1/Section1"
import Section2 from "./components/Section2/Section2"


const App = () => {

  const users =   [
    {
      img : 'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio porro blanditiis aspernatur aperiam officiis. Impedit quae veniam cupiditate tempore.',
      tag : 'Satisfied'
    },
    {
      img : 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio porro blanditiis aspernatur aperiam officiis. Impedit quae veniam cupiditate tempore.',
      tag : 'Underserved'
    },
    {
      img : 'https://images.unsplash.com/photo-1628125660717-5190c3fdfb86?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio porro blanditiis aspernatur aperiam officiis. Impedit quae veniam cupiditate tempore.',
      tag : 'Underbanged'
    }
  ]

  return (
    <div>
      <Section1 users={users}/>

      <Section2 />
    </div>
  )
}

export default App
