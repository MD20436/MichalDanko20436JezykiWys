import Image from 'next/image';
import classes from './page.module.css';

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>One shared passion: <span className={classes.highlight}>Food</span></h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className={classes.main}>
        <h2>Community Perks</h2>
        <ul className={classes.perks}>
          <li>
            <Image src="/images/meal.png" alt="A delicious meal" width={64} height={64} />
            <p>Share & discover recipes</p>
          </li>
          <li>
            <Image src="/images/community.png" alt="A crowd of people, cooking" width={64} height={64} />
            <p>Find new friends & like-minded people</p>
          </li>
          <li>
            <Image src="/images/events.png" alt="A cooking event" width={64} height={64} />
            <p>Participate in exclusive events</p>
          </li>
        </ul>
      </main>
    </>
  );
}
