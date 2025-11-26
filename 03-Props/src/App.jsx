import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
    
    <Card name="Mohd Sahil" age={30}/>
    <Card name="Test" age={30}/>
    <Card name="Demo" age={30}/>
    
    </div>
  )
}

export default App