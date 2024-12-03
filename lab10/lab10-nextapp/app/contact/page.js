export default function Page() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6', textAlign: 'center' }}>
            <h1 style={{ color: '#333' }}>Kontakt</h1>
            <form style={{ maxWidth: '500px', margin: '20px auto', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input
                    type="text"
                    placeholder="Imię"
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
                <input
                    type="email"
                    placeholder="Email"
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
                <textarea
                    placeholder="Twoja wiadomość"
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', minHeight: '100px' }}
                />
                <button
                    type="submit"
                    style={{
                        padding: '10px 20px',
                        borderRadius: '5px',
                        border: 'none',
                        backgroundColor: '#333',
                        color: '#fff',
                        cursor: 'pointer',
                        fontSize: '16px',
                    }}
                >
                    Wyślij
                </button>
            </form>
        </div>
    );
}
