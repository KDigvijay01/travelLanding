import React from "react";
import "./Hero.style.css";

const Hero = ({isInView}) => {
  return (
    <section className="heroSection">
      <div className="heroLeftContent scroll_animation_to_right"
      >
        <h3 className="heroheader">Best Destinations around the world</h3>
        <h1 className="heroTitle">Travel, enjoy and live a new and full life</h1>
        <p className="heroSubheader">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
      <div className="heroButtonContainer">
        <a className="findOutMoreButton">Find out more</a>
        </div>
      </div>

      <img src="assets/hero/imagehero.png" alt="hero" className="heroImage scroll_animation_to_left"/>
    </section>
  );
};

export default Hero;
