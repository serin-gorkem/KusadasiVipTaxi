import { useEffect, useState } from 'react';

// Define a functional component for lazy loading images
const LazyImage = ({ src, alt, imageClass }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const loadImage = () => {
      const image = new Image();
      image.src = src;
      image.onload = () => {
        setImageSrc(src);
      };
    };

    if (IntersectionObserver) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              loadImage();
              observer.unobserve(entry.target);
            }
          });
        },
      );

      const element = document.querySelector('.lazy-image');
      if (element) {
        observer.observe(element);
      }
    } else {
      loadImage();
    }
    console.log(imageSrc);
  }, [src]);


  return <img src={imageSrc} alt={alt} className={imageClass} />;
};
export default LazyImage