import React from "react";
import "./Experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container exp_container">
        {/* section that contain front end experience */}
        <div className="exp_frontend">
          <h3>Frontend Development</h3>
          <div className="exp_content">
            <article className="exp_details">
              <BsFillPatchCheckFill className='exp_icon' />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>{" "}
            </article>

            <article className="exp_details">
              <BsFillPatchCheckFill className='exp_icon' />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="exp_details">
              <BsFillPatchCheckFill className='exp_icon' />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="exp_details">
              <BsFillPatchCheckFill className='exp_icon' />
              <div>
                <h4>Boostrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="exp_details">
              <BsFillPatchCheckFill className='exp_icon' />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Beginner</small>
              </div>{" "}
            </article>

            <article className="exp_details">
              <BsFillPatchCheckFill className='exp_icon' />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* section that contain back end experience */}
        <div className="exp_backend">
          <h3>Backend Development</h3>
          <div className="exp_content">
            <article className="exp_details">
              <BsFillPatchCheckFill className='exp_icon' />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="exp_details">
              <BsFillPatchCheckFill className='exp_icon' />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="exp_details">
              <BsFillPatchCheckFill className='exp_icon' />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="exp_details">
              <BsFillPatchCheckFill className='exp_icon' />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="exp_details">
              <BsFillPatchCheckFill className='exp_icon' />
              <div>
                <h4>Python</h4>
                <small className="text-light">Beginner</small>
              </div>{" "}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
