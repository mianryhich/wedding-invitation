// src/components/Questionnaire.jsx
function Questionnaire() {
    return (
        <section id="questionnaire" style={{
            width: '100%',
            minHeight: '100vh',
            backgroundColor: '#4a3728',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4rem 1rem'
        }}>
            <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.8rem',
                color: '#f0d89e',
                textAlign: 'center',
                marginBottom: '1rem',
                letterSpacing: '2px'
            }}>
                Пожалуйста, ответьте на вопросы
            </h2>

            <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1rem',
                color: '#c2a77a',
                textAlign: 'center',
                marginBottom: '2rem',
                fontStyle: 'italic'
            }}>
                Это поможет нам организовать праздник максимально комфортно для вас
            </p>

            <div style={{
                maxWidth: '900px',
                width: '100%',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
            }}>
                <iframe 
                    src="https://forms.yandex.ru/u/6a31483e5056902ea718ef79?iframe=1"
                    style={{
                        width: '100%',
                        height: '600px',
                        border: 'none',
                        backgroundColor: 'transparent'
                    }}
                    title="Опрос для гостей"
                    allow="geolocation; microphone; camera"
                />
            </div>
        </section>
    );
}

export default Questionnaire;