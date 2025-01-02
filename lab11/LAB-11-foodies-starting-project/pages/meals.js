export default function Meals() {
    return (
        <div>
            <h1 style={{ textAlign: 'center', color: '#0070f3', marginBottom: '1rem' }}>Meals Page</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                <img
                    src="/MichalDanko20436JezykiWys/images/burger.jpg"
                    alt="Burger"
                    style={{ width: '150px', borderRadius: '8px' }}
                />
                <img
                    src="/MichalDanko20436JezykiWys/images/curry.jpg"
                    alt="Curry"
                    style={{ width: '150px', borderRadius: '8px' }}
                />
                <img
                    src="/MichalDanko20436JezykiWys/images/dumplings.jpg"
                    alt="Dumplings"
                    style={{ width: '150px', borderRadius: '8px' }}
                />
                <img
                    src="/MichalDanko20436JezykiWys/images/macncheese.jpg"
                    alt="Mac & Cheese"
                    style={{ width: '150px', borderRadius: '8px' }}
                />
                <img
                    src="/MichalDanko20436JezykiWys/images/pizza.jpg"
                    alt="Pizza"
                    style={{ width: '150px', borderRadius: '8px' }}
                />
            </div>
        </div>
    );
}
