import React, { useRef, useEffect } from 'react';

const FadeInOnIntersect = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in')
        }
      })
    });

    observer.observe(ref.current);

    // cleanup function to disconnect the observer when component unmounts
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="FadeInOnIntersect">
      {children}
    </div>
  );
};

export default FadeInOnIntersect;