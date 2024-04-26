import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonials.styles.css';

const dataArray = [
  {
    id: 1,
    icon: "assets/testimonials/yogendra_singh.jpg",
    text: "“Embarking on a journey with Explore was like stepping into a dream. Each destination felt like a masterpiece brought to life, with nature's beauty speaking through every landscape.”",
    name: "Yogendra Singh",
    city: "New Delhi",
    country: "India",
  },
  {
    id: 2,
    icon: "assets/testimonials/jacob_olly.jpg",
    text: "“From serene countryside to vibrant cityscapes, Explore's seamless itinerary made every moment unforgettable. With expert guidance, each adventure became a story worth telling.”",
    name: "Jacob Olly",
    city: "Los Angeles",
    country: "America",
  },
  {
    id: 3,
    icon: "assets/testimonials/image_two.jpg",
    text: "“Thanks to Explore, every journey feels like discovering a new world of possibilities.”",
    name: "Edmond Dantes",
    city: "Los Angeles",
    country: "America",
  },
  {
    id: 4,
    icon: "assets/testimonials/image_three.jpg",
    text: "“From picturesque pastures to bustling cities, Explore curated the perfect blend of tranquility and excitement. Their attention to detail and expert guidance made each moment memorable.”",
    name: "John Doe",
    city: "New York",
    country: "America",
  },
  {
    id: 5,
    icon: "assets/testimonials/image_four.jpg",
    text: "“With Explore, every adventure feels like a magical escape into the unknown, leaving me eager for more.”",
    name: "John Alex",
    city: "Los Angeles",
    country: "America",
  },



  // Add more items as needed
];

const Testimonials = () => {
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500, 
      };

  return (
    <section className="testimonials scroll_animation_to_top" id="testimonial">
      <div className="testimonials_left">
        <h4 className="testimonials_header">Testimonials</h4>
        <h1 className="testimonials_title">What people say about Us.</h1>
      </div>
      <div className="testimonials_slider_container">
        <Slider {...settings}>
          {dataArray.map((item) => (
            <div className="testimonials_sliders">
            <div key={item.id} className="testimonials_slider">
                {/* <img src="assets/testimonials/quote.svg" alt="quote"/> */}
                <div className="testimonial_image_container">
                    <img
                    src={item.icon}
                    alt={`Testimonial from ${item.name}`}
                  />
                </div>
             <div className="testimonial_text_conatiner">
                <p className="testimonial_text">{item.text}</p>
                  <div className="testimonials_details">
                    <p className="testimonials_name">{item.name}</p>
                    <p className="testimonials_address">
                      {item.city}, {item.country}
                    </p>
                  </div>
             </div>
            
            </div>
            </div>

          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
