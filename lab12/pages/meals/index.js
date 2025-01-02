import Image from 'next/image';
import styles from './page.module.css';

const meals = [
  { name: 'Burger', image: '/images/burger.jpg', description: 'Juicy grilled burger with fresh vegetables.' },
  { name: 'Curry', image: '/images/curry.jpg', description: 'Spicy and aromatic Indian curry.' },
  { name: 'Dumplings', image: '/images/dumplings.jpg', description: 'Soft and delicious dumplings with a savory filling.' },
  { name: 'Mac & Cheese', image: '/images/macncheese.jpg', description: 'Creamy and cheesy macaroni.' },
  { name: 'Pizza', image: '/images/pizza.jpg', description: 'Classic Italian pizza with cheese and toppings.' },
  { name: 'Schnitzel', image: '/images/schnitzel.jpg', description: 'Crispy breaded schnitzel with a side of potatoes.' },
  { name: 'Tomato Salad', image: '/images/tomato-salad.jpg', description: 'Fresh and healthy tomato salad with herbs.' },
];

export default function MealsPage() {
  return (
    <div className={styles.container}>
      <h1>Explore Our Meals</h1>
      <div className={styles.mealGrid}>
        {meals.map((meal, index) => (
          <div key={index} className={styles.meal}>
            <Image src={meal.image} alt={meal.name} width={200} height={150} />
            <h2>{meal.name}</h2>
            <p>{meal.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
