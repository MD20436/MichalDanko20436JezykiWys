import { useRouter } from 'next/router';

export default function DynamicMeal() {
    const router = useRouter();
    const { pizza } = router.query;

    return (
        <div>
            <h1>Dynamic Meal Page for: {pizza}</h1>
            <p>Current URL: {router.asPath}</p>
        </div>
    );
}