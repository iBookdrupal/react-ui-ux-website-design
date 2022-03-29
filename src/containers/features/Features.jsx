import React from 'react'
import Feature from '../../components/feature/Feature'
import './features.css'

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eius nobis velit? Fuga quia ex nisi sapiente ratione neque blanditiis officiis voluptatibus magni modi. Repellendus deleniti odio facere dolor alias?'
  },
  {
    title: 'AI in Display',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eius nobis velit? Fuga quia ex nisi sapiente ratione neque blanditiis officiis voluptatibus magni modi. Repellendus deleniti odio facere dolor alias?'
  },
  {
    title: 'Becoming the Worlds Famous',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eius nobis velit? Fuga quia ex nisi sapiente ratione neque blanditiis officiis voluptatibus magni modi. Repellendus deleniti odio facere dolor alias?'
  },
  {
    title: 'Messengers Autoreply',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eius nobis velit? Fuga quia ex nisi sapiente ratione neque blanditiis officiis voluptatibus magni modi. Repellendus deleniti odio facere dolor alias?'
  },
]

 const Features = () => {
  return (
    <div className="gpt3__features section__padding" id='features'>
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">The Future is not and you just need to  realize it. Step into Future Today & Make it Happen.</h1>

        <p>Request Early Access to some early</p>
      </div>

      <div className="gpt3__features-container">
      {
        featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title+index}/>
        ) )
      }

      </div>
    </div>
  )
}
export default Features
