// src/components/Questionnaire.jsx
function Questionnaire() {
    return (
        <section id="questionnaire" style={{
            width: '100%',
            minHeight: '100vh',
            backgroundColor: '#4a3728',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4rem 1rem'
        }}>
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
                        minHeight: '1400px',
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