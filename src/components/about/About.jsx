import React from 'react';
import ME from '../../assets/ME.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">

        {/* About me section which will include the picture of the Author.*/}
        <div className='about_me'>
          <img src={ME} alt='The actual Users Image.'/>
        </div>

        {/* In the following div we are going to include the actual content of user.*/}
        <div className="about_content">

          {/* Cards div in which we will include our cards*/}
          <div className="about_cards">

            {/* Cards are included in the artical*/}
            <article>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1 year of Experience</small>
            </article>
          </div>

          {/* Second Card*/}
          <div className="about_cards">

            {/* Cards are included in the artical*/}
            <article>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>50+ WorldWide</small>
            </article>
          </div>

          {/* Third Card */}
          <div className="about_cards">

            {/* Cards are included in the artical*/}
            <article>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>20+ completed Projects</small>
            </article>
          </div>

          {/* Paragraph for about uou page, in which you'll include all of your data.*/}
          <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati repellat, eum sed magnam vitae nulla eos, impedit tempora at expedita voluptas sunt mollitia asperiores reprehenderit ex qui veritatis, quae minus.</p>

        </div>
      </div>
    </section>
  )
}

export default About