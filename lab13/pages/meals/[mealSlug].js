import Image from 'next/image';
import classes from './page2.module.css'; 

export default function MealDetailsPage({ meal }) {
  if (!meal) {
    return <p>Meal not found!</p>;
  }

  return (
    <main>
      {}
      <section className={classes.header}>
        <div className={classes.image}>
          {}
          <Image src={meal.image} alt={meal.title} fill />
        </div>

        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>by {meal.creator}</p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </section>

      {}
      <section className={classes.instructions}>
        <h2>Instructions:</h2>
        <pre>{meal.instructions}</pre>
      </section>
    </main>
  );
}
