// src/components/Hero.jsx
import weddingBg from '../assets/wedding-bg.png';
import flower from '../assets/flower.png';
import Timer from './Timer';


function Hero() {
    // Дата свадьбы: 8 августа 2026 года
    const weddingDate = new Date(2026, 7, 8, 0, 0, 0);

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem !important;
          }
          .hero-amp {
            font-size: 1.8rem !important;
          }
          .hero-date {
            font-size: 1.3rem !important;
          }
          .hero-subtitle {
            font-size: 0.9rem !important;
          }
          .hero-flower {
            height: 70% !important;
          }
        }

        /* Адаптация фона для телефонов */
        @media (max-width: 768px) {
          .hero-bg {
            background-position: center center !important;
            background-size: cover !important;
          }
        }
      `}</style>
      
      <section id="hero" style={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        margin: 0,
        padding: 0
      }}>

        {/* Фоновое изображение */}
        <div 
          className="hero-bg"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${weddingBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        {/* Цветок */}
        <img 
          src={flower} 
          alt="Flower" 
          className="hero-flower"
          style={{
            position: 'absolute',
            top: '60%',
            left: '60%',
            transform: 'translate(-50%, -50%) rotate(190deg)',
            width: 'auto',
            height: '120%',
            zIndex: 1,
            objectFit: 'contain'
          }}
        />

        {/* Контент поверх фона и цветка */}
        <div style={{ 
          position: 'relative', 
          zIndex: 2,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.2rem',
            letterSpacing: '4px',
            color: '#a0896b',
            marginBottom: '2rem',
            textTransform: 'uppercase'
          }} className="hero-subtitle">
            Приглашаем на свадьбу
          </p>

          <h1 style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: '4rem',
            margin: 0,
            color: '#4a3728'
          }} className="hero-title">
            Никита
          </h1>

          <div style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: '2.5rem',
            margin: '0.5rem 0',
            color: '#a0896b'
          }} className="hero-amp">
            &amp;
          </div>

          <h1 style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: '4rem',
            margin: 0,
            color: '#4a3728'
          }} className="hero-title">
            Майя
          </h1>

          <div style={{
            fontSize: '1.8rem',
            marginTop: '2rem',
            color: '#8b7355',
            fontFamily: "'Playfair Display', serif"
          }} className="hero-date">
            7-8 августа
          </div>

          <div style={{
            fontSize: '1.8rem',
            marginTop: '0.1rem',
            color: '#8b7355',
            fontFamily: "'Playfair Display', serif"
          }} className="hero-date">
            2026
          </div>

          <div style={{
            width: '60px',
            height: '2px',
            background: '#c2a77a',
            marginTop: '2rem'
          }}></div>

          {/* Таймер */}
          <Timer targetDate={weddingDate} />
        </div>
        
      </section>
    </>
  );
}

export default Hero;