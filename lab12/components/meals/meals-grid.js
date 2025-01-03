import styles from './meals-grid.module.css';
import Image from 'next/image';

export default function MealsGrid({ meals = [] }) {
  if (!meals || meals.length === 0) {
    return <p>No meals available!</p>;
  }

  return (
    <div className={styles.grid}>
      {meals.map((meal) => (
        <div key={meal.id} className={styles.item}>
          <Image src={meal.image} alt={meal.name} width={200} height={150} />
          <h2>{meal.name}</h2>
          <p>{meal.description}</p>
        </div>
      ))}
    </div>
  );
}
