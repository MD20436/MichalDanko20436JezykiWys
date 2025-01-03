import { useEffect, useState } from 'react';
import Image from 'next/image';
import classes from './image-slideshow.module.css';

const images = [
  { image: '/MichalDanko20436JezykiWys/images/burger.jpg', alt: 'A delicious, juicy burger' },
  { image: '/MichalDanko20436JezykiWys/images/curry.jpg', alt: 'A delicious, spicy curry' },
  { image: '/MichalDanko20436JezykiWys/images/dumplings.jpg', alt: 'Steamed dumplings' },
  { image: '/MichalDanko20436JezykiWys/images/macncheese.jpg', alt: 'Mac and cheese' },
  { image: '/MichalDanko20436JezykiWys/images/pizza.jpg', alt: 'A delicious pizza' },
  { image: '/MichalDanko20436JezykiWys/images/schnitzel.jpg', alt: 'A delicious schnitzel' },
  { image: '/MichalDanko20436JezykiWys/images/tomato-salad.jpg', alt: 'A delicious tomato salad' },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
          width={400}
          height={300}
        />
      ))}
    </div>
  );
}
