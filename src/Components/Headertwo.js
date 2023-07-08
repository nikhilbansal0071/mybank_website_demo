import React from 'react'
import investing from './investing.png'
import managing from './managing.png'
import offers from './offers.png'
import Features from "../Components/Features";
import BankFeatures from '../BankFeatures.json';
import featureone from './featureone.png'


const Headertwo = () => {
  return (
    <div className='headertwo'>

<img src={investing} width="400" height="500" />
<img src={managing} width="400" height="500" />
<img src={offers} width="400" height="500" />
<hr></hr>
<div className='middle'>Features</div>
<div className='feature'>


{BankFeatures.map((element,index)=>{
  return(
  <Features 
  key={index}
  title={element.Title} 
  description={element.Desc}
  img={element.Post}
  />
  )
 })
 }
 </div>
 
    </div>
  )
}

export default Headertwo