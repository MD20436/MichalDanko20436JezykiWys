import Image from 'next/image';
import styles from './page.module.css';

const communityImages = [
  { image: '/images/icon.png', alt: 'Community Icon' },
  { image: '/images/logo.png', alt: 'Logo' },
  { image: '/images/dumplings.jpg', alt: 'Cooking Together' },
];

export default function CommunityPage() {
  return (
    <div className={styles.container}>
      <h1>Join Our Foodie Community</h1>
      <p>Share your favorite recipes and meet food enthusiasts from all over the world!</p>
      <div className={styles.imageGrid}>
        {communityImages.map((img, index) => (
          <Image key={index} src={img.image} alt={img.alt} width={200} height={150} />
        ))}
      </div>
    </div>
  );
}
