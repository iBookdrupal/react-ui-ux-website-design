import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

 const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>

      <div className="gpt3__possibility-content">
        <h4>Request Early Access to get Started </h4>
        <h1 className='gradient__text'>Your Possibilities are beyond your imaginations</h1>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, nisi! Cumque, mollitia perspiciatis tempora odio tenetur voluptate quos repudiandae laudantium, provident ut praesentium harum obcaecati voluptatem itaque. Iste, architecto soluta. </p>

        <h4>Request Early Access to get Started </h4>


      </div>
    
    </div>
  )
}
export default Possibility
