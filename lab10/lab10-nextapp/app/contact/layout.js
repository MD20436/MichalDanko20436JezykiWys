export default function ContactLayout({ children }) {
    return (
        <div style={{
            backgroundColor: '#fff',
            color: '#333',
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            border: '1px solid #ccc',
            borderRadius: '10px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        }}>
            <header style={{
                borderBottom: '2px solid #ccc',
                paddingBottom: '10px',
                marginBottom: '20px',
                textAlign: 'center',
            }}>
                <h1 style={{ color: '#333' }}>Kontakt</h1>
            </header>
            {children}
        </div>
    );
}
