import React, {useEffect} from "react";

import './App.css';
import Category from './components/Category';
import Footer from './components/Contact';
import EazyAndFast from './components/EazyAndFast';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Subscribe from './components/Subscribe';
import Testimonials from './components/Testimonial';
import TopSellings from './components/TopSelling';
import ParallaxDiv from "./components/Parallax";




function App() {

  useEffect(()=>{
  const handleScroll = () => {
    const elements = document.querySelectorAll('[class*="scroll_animation"]');
    elements.forEach((element) => {
      const classList=[...element.classList];
      const rect = element.getBoundingClientRect();

      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const isElementInView = (rect.top > 0) && (rect.bottom < windowHeight);
      if (isElementInView) {
        // setIsVisible(true);

        if(classList.includes("scroll_animation_to_right")){
          element.classList.add('animate_to_right');
        }
        else if(classList.includes("scroll_animation_to_left")){
          element.classList.add('animate_to_left');
        }
        else if(classList.includes("scroll_animation_to_top")){
          element.classList.add('animate_to_top');
        }
      } else {
        if(classList.includes("scroll_animation_to_right")){
          element.classList.remove('animate_to_right');
        }
        else if(classList.includes("scroll_animation_to_left")){
          element.classList.remove('animate_to_left');
        }
        else if(classList.includes("scroll_animation_to_top")){
          element.classList.remove('animate_to_top');
        }
      }
    });
  };

  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);


  const animateFunction=()=>{
    document.addEventListener('DOMContentLoaded', function() {
      var fadeRightElements = document.querySelectorAll('[data-aos="fade-right"]');
      fadeRightElements.forEach(function(element) {
        if (isElementInViewport(element)) {
          element.classList.add('aos-animate');
        }
      });

      function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }

      document.addEventListener('scroll', function() {
        fadeRightElements.forEach(function(element) {
          if (isElementInViewport(element) && !element.classList.contains('aos-animate')) {
            element.classList.add('aos-animate');
          }
        });
      });
    });
  }


  const removeAnimateFunction=()=>{
    document.removeEventListener('DOMContentLoaded', function() {
      var fadeRightElements = document.querySelectorAll('[data-aos="fade-right"]');
      fadeRightElements.forEach(function(element) {
        if (isElementInViewport(element)) {
          element.classList.add('aos-animate');
        }
      });

      function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }

      document.removeEventListener('scroll', function() {
        fadeRightElements.forEach(function(element) {
          if (isElementInViewport(element) && !element.classList.contains('aos-animate')) {
            element.classList.add('aos-animate');
          }
        });
      });
    });
  }
  
  return (
    <div  className="App">
      <Navbar/>
      <Hero/>
      <Category/>
      <TopSellings/>
      <EazyAndFast/>
      <Testimonials/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;
