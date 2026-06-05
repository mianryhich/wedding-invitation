import { useState } from 'react';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // закрываем меню после клика
    }
  };

  return (
    <>
      {/* Кнопка бургер-меню для телефонов */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          top: '15px',
          right: '15px',
          zIndex: 1001,
          background: 'rgba(255, 255, 255, 0.95)',
          border: 'none',
          borderRadius: '5px',
          padding: '10px 12px',
          cursor: 'pointer',
          display: 'none', // скрыта по умолчанию
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}
        className="burger-menu-btn"
      >
        <span style={{ fontSize: '20px' }}>☰</span>
      </button>

      {/* Навигация */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        background: 'rgba(255, 255, 255, 0.95)',
        padding: '0.8rem 1rem',
        zIndex: 1000,
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <ul style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1.5rem',
          listStyle: 'none',
          margin: 0,
          padding: 0,
          flexWrap: 'wrap'
        }}>
          <li><a onClick={() => scrollToSection('hero')} style={{ 
            cursor: 'pointer', 
            textDecoration: 'none', 
            color: '#333',
            fontSize: 'clamp(0.8rem, 4vw, 1rem)',
            whiteSpace: 'nowrap'
          }}>Главная</a></li>
          
          <li><a onClick={() => scrollToSection('invitation')} style={{ 
            cursor: 'pointer', 
            textDecoration: 'none', 
            color: '#333',
            fontSize: 'clamp(0.8rem, 4vw, 1rem)',
            whiteSpace: 'nowrap'
          }}>Приглашение</a></li>
          
          <li><a onClick={() => scrollToSection('rsvp')} style={{ 
            cursor: 'pointer', 
            textDecoration: 'none', 
            color: '#333',
            fontSize: 'clamp(0.8rem, 4vw, 1rem)',
            whiteSpace: 'nowrap'
          }}>Подтвердить</a></li>

          <li><a onClick={() => scrollToSection('questionnaire')} style={{ 
            cursor: 'pointer', 
            textDecoration: 'none', 
            color: '#333',
            fontSize: 'clamp(0.8rem, 4vw, 1rem)',
            whiteSpace: 'nowrap'
          }}>Опрос</a></li>
          
          <li><a onClick={() => scrollToSection('schedule')} style={{ 
            cursor: 'pointer', 
            textDecoration: 'none', 
            color: '#333',
            fontSize: 'clamp(0.8rem, 4vw, 1rem)',
            whiteSpace: 'nowrap'
          }}>Расписание</a></li>
        </ul>
      </nav>

      {/* Стили для бургер-меню на телефонах */}
      <style>{`
        @media (max-width: 600px) {
          .burger-menu-btn {
            display: block !important;
          }
          nav ul {
            display: ${isOpen ? 'flex' : 'none'} !important;
            flex-direction: column !important;
            position: absolute !important;
            top: 60px !important;
            left: 0 !important;
            width: 100% !important;
            background: rgba(255, 255, 255, 0.98) !important;
            padding: 1rem !important;
            gap: 1rem !important;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1) !important;
          }
          nav ul li {
            width: 100% !important;
            text-align: center !important;
          }
          nav ul li a {
            display: block !important;
            padding: 0.5rem !important;
          }
        }
      `}</style>
    </>
  );
}

export default Navigation;