import Link from 'next/link';

export default function Home() {
    return (
        <main style={{ textAlign: 'center', color: 'white', backgroundColor: '#333', padding: '2rem' }}>
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                Laboratorium nr 11 - Projekt Startowy
            </h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                Wybierz jedną z poniższych opcji, aby rozpocząć eksplorację:
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <Link
    href="/meals"
    style={{
        display: 'inline-block',
        padding: '1rem 2rem',
        backgroundColor: '#0070f3',
        color: 'white',
        borderRadius: '8px',
        textDecoration: 'none',
    }}
>
    Przeglądaj Jedzenie
</Link>
<Link
    href="/community"
    style={{
        display: 'inline-block',
        padding: '1rem 2rem',
        backgroundColor: '#28a745',
        color: 'white',
        borderRadius: '8px',
        textDecoration: 'none',
    }}
>
    Społeczność
</Link>

            </div>
        </main>
    );
}
