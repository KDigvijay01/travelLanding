// useScrollAnimation.js
import { useEffect, useState } from 'react';

function useScrollAnimation() {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('animateMe');
      if (element && isInViewport(element)) {
        setIsInView(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log("is in view")

  return isInView;
}

export default useScrollAnimation;
