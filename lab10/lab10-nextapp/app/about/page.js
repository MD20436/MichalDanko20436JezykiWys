export default function Page() {
    return (
        <div style={{ 
            padding: '20px', 
            fontFamily: 'Arial, sans-serif', 
            lineHeight: '1.6', 
            textAlign: 'center'
        }}>
            <p>
                WITAM! Jestem Michał.
            </p>
            <img
                src="/MichalDanko20436JezykiWys/images/me.jpg"
                alt="Moje zdjęcie"
                style={{ 
                    maxWidth: '200px', 
                    borderRadius: '50%', 
                    display: 'block', 
                    margin: '20px auto' 
                }}
            />
        </div>
    );
}
