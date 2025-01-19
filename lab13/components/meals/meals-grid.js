
import styles from './meals-grid.module.css';
import MealItem from './meal-item';

export default function MealsGrid({ meals = [] }) {
  if (!meals || meals.length === 0) {
    return <p>Brak dostępnych posiłków!</p>;
  }

  return (
    <div className={styles.grid}>
      {meals.map((meal) => (
        <MealItem
          key={meal.id}
          slug={meal.slug}
          title={meal.title}
          image={meal.image}
          summary={meal.summary}
          creator={meal.creator}
        />
      ))}
    </div>
  );
}
