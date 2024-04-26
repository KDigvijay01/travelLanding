
import React, { useEffect } from 'react';
import "./Parallax.scss";

const PromotionCarousel = () => {
  useEffect(() => {
    const viewportHeight = window.innerHeight;

    const ui = {
      promo: '.promotion-carousel .promotion',
      promoText: '.promotion-carousel .promo-text',
      navigationItems: '.navigation a'
    };

    function isOnScreen(el) {
      const viewportTop = window.scrollY;
      const viewportBottom = viewportTop + viewportHeight;
      const boundsTop = el.offsetTop;
      const boundsBottom = boundsTop + el.offsetHeight;

      return !(viewportBottom < boundsTop || viewportTop > boundsBottom);
    }

    function smoothScroll(target) {
      window.scrollTo({ top: target.offsetTop, behavior: 'smooth' });
    }

    function handleNavClick(e) {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      smoothScroll(target);
    }

    function handleScroll() {
      const promos = document.querySelectorAll(ui.promo);
      promos.forEach(el => {
        if (isOnScreen(el)) {
          scrolly(el);
        }
      });
      updateNavigation();
      fadeAtTop(document.querySelectorAll(ui.promoText));
    }

    function scrolly(el) {
      const topOffset = el.offsetTop;
      const height = el.offsetHeight;
      const scrollTop = window.scrollY;
      const maxPixels = height / 4;
      const percentageScrolled = (scrollTop - topOffset) / height;
      let backgroundOffset = maxPixels * percentageScrolled;

      backgroundOffset = Math.round(Math.min(maxPixels, Math.max(0, backgroundOffset)));

      el.style.backgroundPosition = `right 0px top ${backgroundOffset}px`;
    }

    function fadeAtTop(els) {
      const startPos = 0.25;
      els.forEach(el => {
        let position = el.offsetTop - window.scrollY + viewportHeight / 6;
        let opacity = position < viewportHeight * startPos ? position / (viewportHeight * startPos) * 1 : 1;

        el.style.opacity = opacity;
      });
    }

    function updateNavigation() {
      const promos = document.querySelectorAll(ui.promo);
      promos.forEach((el, index) => {
        const activeSection = index;
        if ((el.offsetTop - window.innerHeight / 2 < window.scrollY) && (el.offsetTop + el.offsetHeight - window.innerHeight / 2 > window.scrollY)) {
          document.querySelectorAll(ui.navigationItems)[activeSection].classList.add('active');
        } else {
          document.querySelectorAll(ui.navigationItems)[activeSection].classList.remove('active');
        }
      });
    }

    document.querySelectorAll(ui.navigationItems).forEach(navItem => {
      navItem.addEventListener('click', handleNavClick);
    });

    window.addEventListener('scroll', handleScroll);
    updateNavigation();

    return () => {
      document.querySelectorAll(ui.navigationItems).forEach(navItem => {
        navItem.removeEventListener('click', handleNavClick);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="promotion-carousel">
      <div className="promotions">
        <div className="promotion" id="section1" style={{backgroundImage: 'url(https://picsum.photos/1440/900?image=319)'}}>
          <div className="shade"></div>
          <div className="promo-detail cycle-overlay">
            <div className="promo-text">
              <span className="dash"></span>
              <span className="promo-flag">New Series From Sacha Baron Cohen</span>
              <a href="#" className="copy">
                <div className="headline">Who Is America?</div>
                <p className="body long">Season Finale: Sacha Baron Cohen explores our unique nation.</p>
              </a>
              <div className="buttons">
                <a className="button sho-play-link" href="#">Play Now</a>
                <a className="button info-button" href="#">More Info</a>
                <a className="button see-all" href="#">All Episodes</a>
              </div>
            </div>
          </div>
        </div>
        {/* More promotion items */}
      </div>
      <div className="navigation">
        <ul>
          <li><a href="#section1" data-number="1"></a></li>
          <li><a href="#section2" data-number="2"></a></li>
          <li><a href="#section3" data-number="3"></a></li>
          <li><a href="#section4" data-number="4"></a></li>
          <li><a href="#section5" data-number="5"></a></li>
          <li><a href="#section6" data-number="6"></a></li>
          <li><a href="#section7" data-number="7"></a></li>
          <li><a href="#section8" data-number="8"></a></li>
          <li><a href="#section9" data-number="9"></a></li>
          <li><a href="#section10" data-number="10"></a></li>
        </ul>
      </div>
    </div>
  );
};
export default PromotionCarousel;