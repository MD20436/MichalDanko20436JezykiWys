export default function InterestsLayout({ children }) {
    return (
        <div style={{
            backgroundColor: '#f0f8ff',
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
        }}>
            <header style={{
                borderBottom: '2px solid #333',
                paddingBottom: '10px',
                marginBottom: '20px',
            }}>
                <h1 style={{ color: '#555', textAlign: 'center' }}>Moje zainteresowania</h1>
            </header>
            {children}
        </div>
    );
}
