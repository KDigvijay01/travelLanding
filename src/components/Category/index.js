import React from 'react';
import "./Category.styles.css"

const data=[{
    icon:"assets/category/category_one.png",
    title:"Weather Info",
    id:1,
    subtitle:"Built Wicket longer admire do barton vanity itself do in it."
},
// {
//     icon:"assets/category/plane.png",
//     title:"Best Flights",
//     id:2,
//     subtitle:"Engrossed listening. Park gate sell they west hard for the flights."
// },
{
    icon:"assets/category/category_three.png",
    title:"Local Events",
    id:3,
    subtitle:"Barton vanity itself do in it. Preferd to men it engrossed listening."
},
{
    icon:"assets/category/category_four.png",
    title:"Customization",
    id:4,
    subtitle:"We deliver outsourced aviation services for military customers."
},



]

const Category = () => {
  return (
        <section className='category scroll_animation_to_top' id="category">
            <h3 className="category_header">
                Categories
            </h3>
            <h1 className="category_title">We Offer Best Services</h1>
            <ul className="category_list">
                {data.map((item=>(
                    <li className="category_list_item card_animation" id={item.id}>
                        <img src={item.icon} alt={item.title} className="category_list_icon"/>
                        <h4 className="category_list_title">
                            {item.title}
                        </h4>
                        <h5 className="category_list_subtitle">
                            {item.subtitle}
                        </h5>

                    </li>
                )))}
            
            </ul>
        </section>
  )
}

export default Category