import React from 'react';
import './Services.css';
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">

        {/* UI/UX section starts from here */}
        <article className='service'>
          <div className="service_name">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='services_list'>
            <li>
              <BiCheck className='service_icon'/>
              <p>I am designing attractive User Interfaces.</p>
            </li>

            <li>
              <BiCheck className='service_icon'/>
              <p>I am designing attractive User Interfaces.</p>
            </li>

            <li>
              <BiCheck className='service_icon'/>
              <p>I am designing attractive User Interfaces.</p>
            </li>

            <li>
              <BiCheck className='service_icon'/>
              <p>I am designing attractive User Interfaces.</p>
            </li>

            <li>
              <BiCheck className='service_icon'/>
              <p>I am designing attractive User Interfaces.</p>
            </li>
          </ul>
        </article>


{/* Web Development section starts from here */}
<article className='service'>
          <div className="service_name">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='services_list'>
            <li>
              <BiCheck className='service_icon'/>
              <p>I am designing attractive User Interfaces.</p>
            </li>

            <li>
              <BiCheck className='service_icon'/>
              <p>I am designing attractive User Interfaces.</p>
            </li>

            <li>
              <BiCheck className='service_icon'/>
              <p>I am designing attractive User Interfaces.</p>
            </li>

            <li>
              <BiCheck className='service_icon'/>
              <p>I am designing attractive User Interfaces.</p>
            </li>

            <li>
              <BiCheck className='service_icon'/>
              <p>I am designing attractive User Interfaces.</p>
            </li>
          </ul>
        </article>


{/* Content Creation section starts from here */}
<article className='service'>
          <div className="service_name">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='services_list'>
            <li>
              <BiCheck className='service_icon'/>
              <p>I am designing attractive User Interfaces.</p>
            </li>

            <li>
              <BiCheck className='service_icon'/>
              <p>I am designing attractive User Interfaces.</p>
            </li>

            <li>
              <BiCheck className='service_icon'/>
              <p>I am designing attractive User Interfaces.</p>
            </li>

            <li>
              <BiCheck className='service_icon'/>
              <p>I am designing attractive User Interfaces.</p>
            </li>

            <li>
              <BiCheck className='service_icon'/>
              <p>I am designing attractive User Interfaces.</p>
            </li>
          </ul>
        </article>


      </div>
    </section>
  )
}

export default Services