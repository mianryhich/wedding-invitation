// src/components/Timer.jsx
import Countdown from 'react-countdown';

function Timer({ targetDate }) {
  // Рендер таймера
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <div style={{
          fontSize: '1.5rem',
          color: '#4a3728',
          fontFamily: "'Playfair Display', serif",
          textAlign: 'center'
        }}>
          Сегодня наш праздник!
        </div>
      );
    }

    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '1.5rem',
        flexWrap: 'wrap'
      }}>
        {/* Дни */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#4a3728',
            fontFamily: "'Playfair Display', serif"
          }}>
            {days}
          </div>
          <div style={{ fontSize: '0.8rem', color: '#4a3728' }}>
            дней
          </div>
        </div>

        {/* Часы */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#4a3728',
            fontFamily: "'Playfair Display', serif"
          }}>
            {hours}
          </div>
          <div style={{ fontSize: '0.8rem', color: '#4a3728' }}>
            часов
          </div>
        </div>

        {/* Минуты */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#4a3728',
            fontFamily: "'Playfair Display', serif"
          }}>
            {minutes}
          </div>
          <div style={{ fontSize: '0.8rem', color: '#4a3728' }}>
            минут
          </div>
        </div>

        {/* Секунды */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#4a3728',
            fontFamily: "'Playfair Display', serif"
          }}>
            {seconds}
          </div>
          <div style={{ fontSize: '0.8rem', color: '#4a3728' }}>
            секунд
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ marginTop: '3rem',
     width: '100%',
     backgroundColor: 'rgba(255, 255, 255, 0.85)',
      }}>
      <Countdown date={targetDate} renderer={renderer} />
    </div>
  );
}

export default Timer;