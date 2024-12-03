export default function AboutLayout({ children }) {
    return (
        <div style={{
            padding: '20px',
            fontFamily: 'Georgia, serif',
            lineHeight: '1.6',
        }}>
            <header style={{
                borderBottom: '2px solid #333',
                paddingBottom: '10px',
                marginBottom: '20px',
            }}>
                <h1 style={{ color: '#333', textAlign: 'center' }}>O mnie</h1>
            </header>
            {children}
        </div>
    );
}
