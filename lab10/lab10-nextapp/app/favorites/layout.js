export default function FavoritesLayout({ children }) {
    return (
        <div style={{
            backgroundColor: '#1c1c1c',
            color: '#fff',
            padding: '20px',
            fontFamily: 'Courier New, monospace',
        }}>
            <header style={{
                borderBottom: '2px solid #555',
                paddingBottom: '10px',
                marginBottom: '20px',
            }}>
                <h1 style={{ textAlign: 'center', color: '#ff6347' }}>Ulubiona gra</h1>
            </header>
            {children}
        </div>
    );
}
