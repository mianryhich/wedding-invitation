// src/components/Questionnaire.jsx
import { useState } from 'react';

function Questionnaire() {
  // Состояния для каждого вопроса
  const [transfer, setTransfer] = useState([]);
  const [food, setFood] = useState([]);
  const [alcohol, setAlcohol] = useState([]);
  const [child, setChild] = useState(null);

  // Обработчики для checkbox (несколько вариантов)
  const handleCheckboxChange = (value, selectedArray, setSelectedArray) => {
    if (selectedArray.includes(value)) {
      setSelectedArray(selectedArray.filter(item => item !== value));
    } else {
      setSelectedArray([...selectedArray, value]);
    }
  };

  // Обработчик для radio (один вариант)
  const handleRadioChange = (value, setSelected) => {
    setSelected(value);
  };

  return (
    <section id="questionnaire" style={{
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#4a3728',  // коричневый фон
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem 1rem'
    }}>
      <div style={{
        maxWidth: '800px',
        width: '100%',
        padding: '3rem',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',  // легкий светлый слой для объема
        borderRadius: '20px'
      }}>
        
        {/* Заголовок */}
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '2.5rem',
          color: '#fff',
          textAlign: 'center',
          marginBottom: '2rem',
          letterSpacing: '2px'
        }}>
          ПОЖАЛУЙСТА, ОТВЕТЬТЕ НА ВОПРОСЫ
        </h2>

        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1rem',
          color: '#f0d89e',
          textAlign: 'center',
          marginBottom: '2rem',
          fontStyle: 'italic'
        }}>
          Это поможет нам организовать праздник максимально комфортно для вас
        </p>

        {/* Вопрос 1: Трансфер */}
        <div style={{
          marginBottom: '2rem',
          paddingBottom: '1.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.2)'
        }}>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.3rem',
            color: '#f0d89e',
            marginBottom: '1rem'
          }}>
            Потребуется ли вам трансфер?
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {['Нет', 'Только до торжества', 'Только после торжества', 'До и после торжества'].map(option => (
              <label key={option} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#fff',
                cursor: 'pointer',
                fontFamily: "'Playfair Display', serif"
              }}>
                <input
                  type="checkbox"
                  value={option}
                  checked={transfer.includes(option)}
                  onChange={() => handleCheckboxChange(option, transfer, setTransfer)}
                  style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* Вопрос 2: Предпочтения по еде */}
        <div style={{
          marginBottom: '2rem',
          paddingBottom: '1.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.2)'
        }}>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.3rem',
            color: '#f0d89e',
            marginBottom: '1rem'
          }}>
            Есть ли у вас особые предпочтения по еде?
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {['нет', 'не ем мясо', 'не ем рыбу', 'вегетарианец'].map(option => (
              <label key={option} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#fff',
                cursor: 'pointer',
                fontFamily: "'Playfair Display', serif"
              }}>
                <input
                  type="checkbox"
                  value={option}
                  checked={food.includes(option)}
                  onChange={() => handleCheckboxChange(option, food, setFood)}
                  style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* Вопрос 3: Алкоголь */}
        <div style={{
          marginBottom: '2rem',
          paddingBottom: '1.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.2)'
        }}>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.3rem',
            color: '#f0d89e',
            marginBottom: '1rem'
          }}>
            Какой алкоголь вы предпочитаете?
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {['Красное вино', 'Белое вино', 'Шампанское', 'Виски/коньяк', 'Водка', 'Не буду пить алкоголь', 'Другое'].map(option => (
              <label key={option} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#fff',
                cursor: 'pointer',
                fontFamily: "'Playfair Display', serif"
              }}>
                <input
                  type="checkbox"
                  value={option}
                  checked={alcohol.includes(option)}
                  onChange={() => handleCheckboxChange(option, alcohol, setAlcohol)}
                  style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* Вопрос 4: Ребенок */}
        <div style={{
          marginBottom: '2rem',
          paddingBottom: '1.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.2)'
        }}>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.3rem',
            color: '#f0d89e',
            marginBottom: '1rem'
          }}>
            Будет ли с вами на празднике ребенок?
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {['Да', 'Нет'].map(option => (
              <label key={option} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#fff',
                cursor: 'pointer',
                fontFamily: "'Playfair Display', serif"
              }}>
                <input
                  type="radio"
                  name="child"
                  value={option}
                  checked={child === option}
                  onChange={() => handleRadioChange(option, setChild)}
                  style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* Кнопка отправки */}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button style={{
            backgroundColor: '#f0d89e',
            color: '#4a3728',
            fontFamily: "'Playfair Display', serif",
            fontSize: '1.1rem',
            padding: '0.8rem 2rem',
            border: 'none',
            borderRadius: '40px',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'transform 0.2s',
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            Отправить ответы
          </button>
        </div>
      </div>
    </section>
  );
}

export default Questionnaire;