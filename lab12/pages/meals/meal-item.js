const dummyMeals = [
  { id: 'm1', title: 'Pizza', slug: 'pizza', image: '/images/pizza.jpg', summary: 'Delicious cheese pizza', creator: 'Chef Anna' },
  { id: 'm2', title: 'Burger', slug: 'burger', image: '/images/burger.jpg', summary: 'Juicy beef burger', creator: 'Chef John' },
];

export default function MealsPage() {
  return (
    <main>
      <h1>Meals</h1>
      <MealsGrid meals={dummyMeals} />
    </main>
  );
}
