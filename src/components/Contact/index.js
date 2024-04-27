import React from "react";
import "./Contact.styles.css";

const data=[
    {
        section:"Company",
        items:["About", "Careers", "Mobile",]
    },

    {
        section:"Contact",
        items:["Help/FAQ", "Press", "Affilates",]
    },

    {
        section:"More",
        items:["Airlinefees", "Airline", "Low fare tips",]
    },
]


const footerButtons=[
    {
        icon:"assets/footer/google_play.png",
        title:"Get it on",
        subtitle:"Google play"
    },

    {
        icon:"assets/footer/apple.png",
        title:"Available on the",
        subtitle:"Apple Store"
    },

]




const Footer = () => {

  const FooterCards = ({item}) => {
    return (
        <div className="footerCardsContainer">
            <h2 className="footerCardsTitle">{item.section}</h2>
            <ul className="footerCardsItems">
                {item.items.map((ele, index)=>(
                    <li key={index} className="footerCardsItem">
                        <a>{ele}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
  };

  const FooterContactLinks=()=>{

    const FooterButtonsDiv=({item})=>{
        return(
            <div className="footerButtonContainer">
                <img src={item.icon} alt="social" className="footerButtonImage"/>
                <div className="footerButtonInfo">
                    <p className="footerButtonTitle">{item.title}</p>
                    <p className="footerButtonSubtitle">{item.subtitle}</p>
                </div>
            </div>
        )
    }

    return(
        <div className="footerContactLinksContainer">
            <ul className="footerContactSocialLinksList">
                <li className="footerContactSocialLinksListItem">
                    <a>
                        <img src="assets/footer/facebook.png" className="socialIcons"/>
                    </a>
                </li>

                <li className="footerContactSocialLinksListItem">
                    <a>
                        <img src="assets/footer/insta.png" className="socialIcons"/>
                    </a>
                </li>

                <li className="footerContactSocialLinksListItem">
                    <a>
                    <img src="assets/footer/twitter.png" className="socialIcons"/>
                    </a>
                </li>
            </ul>
            <h2 className="discoverText">Discover our app</h2>

            <ul className="storeLinksContainer">
              {footerButtons.map((item, index)=>(
                <li className="storeLinksContent">
                    <FooterButtonsDiv item={item}/>
                </li>
              ))}
            </ul>
        </div>
    )
  }

  return (
    <footer className="footerSection scroll_animation_to_top" id="footer">
      <div className="footerLeftDiv">
        <h1 className="footerLeftDivTitle">Explore.</h1>
        <p className="footerLeftDivSubTitle">Book your trip in minute, get full Control for much longer.</p>
      </div>
        
    <ul className="footerItems">
        {data.map((item, index)=>(
            <li className="footerItem">
                <FooterCards item={item}/>
            </li>
        ))}

        <li className="footerItem">
            <FooterContactLinks/>
        </li>
    </ul>

    </footer>
  );
};

export default Footer;
