import React from 'react'
import Feature from '../../components/feature/Feature'
import './whatGPT3.css'

 const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className="gpt3__whatgpt3-feature">
      
        <Feature title='What is GPT-3'  text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid omnis ipsam itaque atque! Soluta, debitis autem quidem modi saepe reiciendis quaerat laborum, temporibus, magni facilis nisi iusto cupiditate? Nam, ipsa.'/>
      </div>

      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>

        <p>Explore the Library</p>
      </div>

      <div className="gpt3__whatgpt3-container">
        <Feature title='Chatbox' text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid omnis ipsam itaque atque! Soluta, debitis autem quidem modi saepe reiciendis quaerat laborum, temporibus, magni facilis nisi iusto cupiditate? Nam, ipsa.'/>
        <Feature title='Knowledge Base' text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid omnis ipsam itaque atque! Soluta, debitis autem quidem modi saepe reiciendis quaerat laborum, temporibus, magni facilis nisi iusto cupiditate? Nam, ipsa.'/>
        <Feature title='Education' text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid omnis ipsam itaque atque! Soluta, debitis autem quidem modi saepe reiciendis quaerat laborum, temporibus, magni facilis nisi iusto cupiditate? Nam, ipsa.'/>
      </div>
    
    </div>
  )
}
export default WhatGPT3
