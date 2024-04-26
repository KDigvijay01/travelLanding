import React from 'react';
import "./EazyAndFast.styles.css";


const dataArray=[
    {
        icon: "assets/eazyandfast/one.png",
        title:"Choose Destination",
        subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "
    },
    {
        icon: "assets/eazyandfast/two.png",
        title:"Make Payment",
        subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "
    },
    {
        icon: "assets/eazyandfast/three.png",
        title:"Reach Airport on Selected Date",
        subtitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. "
    },

]

const EazyAndFast = () => {
  return (
        
    <section className='eazyAndFastCaontainer' id="eazy_and_fast">
        <h3 className='eazyAndFast_title'>Eazy and Fast</h3>
        <div className='eazyAndFast_content'>
            <div className='eazyAndFast_left scroll_animation_to_right'>
                <h1 className='eazyAndFast_content_title'>Book your next trip 
                    in 3 easy steps
                    </h1>

                    <ul className='eazyAndFast_list'>
                        {dataArray.map((item, index)=>(
                            <li key={index} className='eazyAndFast_item'>
                                <img src={item.icon} alt={item.title} className='eazyAndFast_icon'/>
                                <div className='eazyAndFast_title_subtitle'>
                                    <p className='eazyAndFast_list_title'>
                                        {item.title}
                                    </p>
                                    <p className='eazyAndFast_list_subtitle'>
                                        {item.subtitle}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
            </div>

            <img src="assets/eazyandfast/tripimage.png" alt="trip" className='tripImage scroll_animation_to_left'/>
            <div className='topblur'></div>
        </div>
    </section>
  )
}

export default EazyAndFast