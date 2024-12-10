import '../app/globals.css';
export default function Meals() {
    return (
        <div>
            <h1>Meals Page</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                <img src="/images/burger.jpg" alt="Burger" style={{ width: '150px', borderRadius: '8px' }} />
                <img src="/images/curry.jpg" alt="Curry" style={{ width: '150px', borderRadius: '8px' }} />
                <img src="/images/dumplings.jpg" alt="Dumplings" style={{ width: '150px', borderRadius: '8px' }} />
                <img src="/images/macncheese.jpg" alt="Mac & Cheese" style={{ width: '150px', borderRadius: '8px' }} />
                <img src="/images/pizza.jpg" alt="Pizza" style={{ width: '150px', borderRadius: '8px' }} />
                <img src="/images/schnitzel.jpg" alt="Schnitzel" style={{ width: '150px', borderRadius: '8px' }} />
                <img src="/images/tomato-salad.jpg" alt="Tomato Salad" style={{ width: '150px', borderRadius: '8px' }} />
            </div>
        </div>
    );
}