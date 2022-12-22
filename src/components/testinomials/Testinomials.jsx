import React from "react";
import "./Testinomial.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
        avatar: AVTR1,
        name: "Avinash",
        review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, neque, praesentium corrupti veniam, incidunt sint ea reiciendis et voluptatum recusandae expedita similique.",
  },
  {
      avatar: AVTR2,
      name: "Babar",
      review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, neque, praesentium corrupti veniam, incidunt sint ea reiciendis et voluptatum recusandae expedita similique.",
  },
  {

    
    avatar: AVTR3,
    name: "Mubashir",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, neque, praesentium corrupti veniam, incidunt sint ea reiciendis et voluptatum recusandae expedita similique.",
  },
  {
  
    avatar: AVTR4,
    name: "Yasir",
    review:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, neque, praesentium corrupti veniam, incidunt sint ea reiciendis et voluptatum recusandae expedita similique.",
}
];

const Testinomials = () => {
  return (
    <section id="testinomials">
      <h5>Reviews from Clients</h5>
      <h2>Testinomials</h2>

      <Swiper className="container testi_container" 

      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}

    >
        {data.map(({avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testinomial">
              <div className="client_img">
                <img src={avatar} />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })
        }
      </Swiper>
    </section>
  );
};

export default Testinomials;
