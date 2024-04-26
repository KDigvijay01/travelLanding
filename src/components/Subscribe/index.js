import React from 'react';
import "./Subscripe.styles.css";


const Subscribe = () => {
  return (
    <section className='subscribe scroll_animation_to_top' id="subscribe">
        <div className='subscribe_content'>
            <h1>
            Subscribe to get information, latest news and other
                interesting offers about Traveling.

            </h1>
            <div className='subscribeButtonContainer'>
                <input placeholder='your email' className='emailInput'/>
                <button className='subscribeButton'>Subscribe</button>
            </div>

            <img className='bottom_left_image' src="assets/subscribe/top.png" alt="top"/>
        <img className='top_right_image' src="assets/subscribe/bottom.png" alt="bottom"/>
        </div>

        
    </section>
  )
}

export default Subscribe;