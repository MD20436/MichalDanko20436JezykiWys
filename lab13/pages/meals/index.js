
import { useEffect, useState } from 'react';
import MealsGrid from '../../components/meals/meals-grid';
import LoadingIndicator from '../../components/loading'; 


import styles from './page1.module.css';

export default function MealsPage() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMeals() {
      try {
        
        await new Promise((res) => setTimeout(res, 2000));

        const res = await fetch('/api/meals');
        const data = await res.json();
        setMeals(data);
      } catch (err) {
        console.error('Błąd pobierania posiłków', err);
      } finally {
        setLoading(false);
      }
    }
    fetchMeals();
  }, []);

  return (
    <div className={styles.hero}>
      {}
      <h1>Delicious meals, created <em>by you</em></h1>
      <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
      <button className={styles.ctaButton}>Share Your Favorite Recipe</button>

      {loading && (
        <div className={styles.loadingBox}>
          <LoadingIndicator />
        </div>
      )}

      {!loading && (
        <div className={styles.mealsWrapper}>
          <MealsGrid meals={meals} />
        </div>
      )}
    </div>
  );
}
