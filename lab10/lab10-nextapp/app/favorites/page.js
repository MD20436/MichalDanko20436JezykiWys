export default function Page() {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', lineHeight: '1.6' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
                <img
                    src="/images/game.jpg"
                    alt="Ulubiona gra"
                    style={{ maxWidth: '300px', borderRadius: '10px' }}
                />
                <p>
                    Moją ulubioną grą jest <b>GOTHIC</b>. Uwielbiam jego niesamowitą fabułę oraz
                    to, jak dobrze jest dopracowany.
                </p>
            </div>
        </div>
    );
}
