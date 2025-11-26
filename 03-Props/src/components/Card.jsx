import React from 'react'

const Card = (props) => {


  console.log(props);

  return (
    <div className='card'>
      <img src="https://picsum.photos/400/300" alt="" />
      <h4>{props.name}</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, est.</p>
      <button className='btn btn-priamry'>Read More</button>
    </div>
  )
}

export default Card