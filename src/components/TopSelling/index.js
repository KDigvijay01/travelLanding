import React from "react";
import "./TopSelling.styles.css";


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/autoplay'; 
import SwiperCore from 'swiper/core';
import 'swiper/css/navigation';

import { Autoplay, Navigation} from 'swiper/modules';

SwiperCore.use([Autoplay, Navigation]);


const images = [
  {
    path: "assets/topsells/adventure.jpg",
    place:"Jaipur",
    price:"800",
    duration: "10"
  },
  {
    path: "assets/topsells/aeroplane.jpg",
    place:"Delhi",
    price:"500",
    duration: "5"
  },
  {
    path: "assets/topsells/bluesky.jpg",
    place:"Goa",
    price:"700",
    duration: "4"
  },

  {
    path: "assets/topsells/boats.jpg",
    place:"Lakshadweep",
    price:"400",
    duration: "7"
  },
  {
    path: "assets/topsells/coolCity.jpg",
    place:"Bangalore",
    price:"1000",
    duration: "7"
  },
  {
    path: "assets/topsells/greenwadi.jpg",
    place:"Kashmir",
    price:"800",
    duration: "7"
  },
  {
    path: "assets/topsells/whitemountain.jpg",
    place:"Manali",
    price:"800",
    duration: "7"
  },
];

const TopSellings = () => {

  return (
    <section className="topselling_container scroll_animation_to_top" id="top_selling">
      <h3 className="topselling_header">Top Selling</h3>
      <h1 className="topselling_title">Top Destinations</h1>

      <div className="topselling_slider_container">
        {/* <Slider {...settings} className="my_slide"> */}
        <Swiper

          spaceBetween={10}
          slidesPerView={3}
          autoplay={{
        delay: 3000, 
        disableOnInteraction: false, 
        }}
        navigation={true}
        breakpoints = {{
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    560: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {images.map((item, index) => (
            <SwiperSlide>
              <div className="slider" key={index}>
                <div className="imageContainer">
                  <img
                    src={item.path}
                    alt="london"
                    className="destination_image"
                  />
                </div>

                <div className="detailsContainer">
                  <div className="details">
                    <p>{item.place}</p>
                    <p>${item.price}</p>
                  </div>
                  <div className="moreDetails">
                    <img
                      src="assets/topsells/arrow.png"
                      alt="arrow"
                      className="arrowImage"
                    />
                    <p>{item.duration} Days Trip</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </Slider> */}
      </div>
    </section>
  );
};

export default TopSellings;
