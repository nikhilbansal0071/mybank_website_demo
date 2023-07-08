import React from 'react'

const Features = (props) => {
  return (
   
   
      <div className='features'>
      
    <img src={props.img} alt="" />
    <h2>{props.title}</h2>
    <p>{props.description}</p></div>
    
  )
}

export default Features