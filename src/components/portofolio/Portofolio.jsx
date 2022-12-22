import React from 'react';
import './Portofolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
  {
    id:1,
    image: IMG1,
    title: 'Crypro Currency dashboard and Financial Visualization',
    github: 'https://github.com/yameen-baloch',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id:2,
    image: IMG2,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com/yameen-baloch',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id:3,
    image: IMG3,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com/yameen-baloch',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id:4,
    image: IMG4,
    title: 'Maintaining tasks and tracking progress',
    github: 'https://github.com/yameen-baloch',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id:5,
    image: IMG5,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com/yameen-baloch',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id:6,
    image: IMG6,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com/yameen-baloch',
    demo: 'https://dribbble.com/Alien_pixels'
  }
]

const Portofolio = () => {
  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portfolio_container">
      { data.map(({id, image, title, github, demo}) =>{
        return(
          <article key={id} className='portfolio_item'>
          <div className="portfolio_img">
            <img src={image} alt="My Portfolio ONE" />
          </div>
          <h3>{title}</h3>
          <div className='portfolio_cta'>
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </article>
        )
       })
      }
      </div>
    </section>
  )
}

export default Portofolio