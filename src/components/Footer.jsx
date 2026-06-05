// src/components/Footer.jsx
function Footer() {
  return (
    <footer style={{
      width: '100%',
      backgroundColor: '#4a3728',
      padding: '3rem 1rem',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        {/* Милая фраза */}
        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.2rem',
          color: '#f0d89e',
          marginBottom: '1rem',
          fontStyle: 'italic'
        }}>
          Спасибо, что будете с нами в этот важный день ❤
        </p>

        {/* Декоративная линия */}
        <div style={{
          width: '40px',
          height: '1px',
          background: '#f0d89e',
          margin: '1rem auto'
        }}></div>

        {/* Авторство */}
        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '0.9rem',
          color: '#c2a77a',
          marginBottom: '0.3rem'
        }}>
          С любовью сделано Майей
        </p>

        {/* Год */}
        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '0.8rem',
          color: '#8b7355'
        }}>
          2026
        </p>
      </div>
    </footer>
  );
}

export default Footer;