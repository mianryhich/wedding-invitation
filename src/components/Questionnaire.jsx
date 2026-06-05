// src/components/Questionnaire.jsx
import { useState } from 'react';

function Questionnaire() {
  // Состояния для полей имени и фамилии
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  
  // Состояния для каждого вопроса
  const [transfer, setTransfer] = useState([]);
  const [food, setFood] = useState([]);
  const [alcohol, setAlcohol] = useState([]);
  const [child, setChild] = useState(null);
  const [attendance, setAttendance] = useState([]);
  
  // Состояние для комментария
  const [comment, setComment] = useState('');

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

  // Стиль для checkbox (рамка без фона)
  const checkboxStyle = {
    width: '20px',
    height: '20px',
    cursor: 'pointer',
    accentColor: '#f0d89e',
    backgroundColor: 'transparent',
    border: '2px solid #f0d89e',
    borderRadius: '4px'
  };

  // Стиль для radio (круглая рамка без фона)
  const radioStyle = {
    width: '20px',
    height: '20px',
    cursor: 'pointer',
    accentColor: '#f0d89e',
    backgroundColor: 'transparent',
    border: '2px solid #f0d89e',
    borderRadius: '50%'
  };

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
        maxWidth: '800px',
        width: '100%',
        padding: '3rem',
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '20px'
      }}>
        
        {/* Заголовок */}
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.5rem',
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

        {/* Поля для имени и фамилии */}
        <div style={{
          marginBottom: '2rem',
          paddingBottom: '1.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.2)'
        }}>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <label style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '0.9rem',
                color: '#f0d89e',
                display: 'block',
                marginBottom: '0.5rem'
              }}>
                Имя
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Ваше имя"
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  borderRadius: '10px',
                  border: '1px solid #f0d89e',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: '#fff',
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
            </div>
            
            <div style={{ flex: 1, minWidth: '200px' }}>
              <label style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '0.9rem',
                color: '#f0d89e',
                display: 'block',
                marginBottom: '0.5rem'
              }}>
                Фамилия
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Ваша фамилия"
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  borderRadius: '10px',
                  border: '1px solid #f0d89e',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: '#fff',
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>
        </div>

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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
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
                  style={checkboxStyle}
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {['Нет', 'Не ем мясо', 'Не ем рыбу', 'Вегетарианец', 'Веган', 'Другое'].map(option => (
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
                  style={checkboxStyle}
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {['Красное вино', 'Белое вино', 'Шампанское', 'Виски/коньяк', 'Водка', 'Пиво', 'Коктейли', 'Не буду пить алкоголь', 'Другое'].map(option => (
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
                  style={checkboxStyle}
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
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
                  style={radioStyle}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* Вопрос 5: Присутствие на днях свадьбы */}
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
            Будете ли вы на росписи 7 августа и на банкете 8 августа?
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {['На росписи 7 августа (Москва)', 'На банкете 8 августа (Владимир)', 'На обоих днях'].map(option => (
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
                  checked={attendance.includes(option)}
                  onChange={() => handleCheckboxChange(option, attendance, setAttendance)}
                  style={checkboxStyle}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* Поле для комментария */}
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
            Дополнительный комментарий
          </h3>
          
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Ваш комментарий или пожелание..."
            rows="4"
            style={{
              width: '100%',
              padding: '0.8rem',
              borderRadius: '10px',
              border: '1px solid #f0d89e',
              backgroundColor: 'rgba(255,255,255,0.1)',
              color: '#fff',
              fontFamily: "'Playfair Display', serif",
              fontSize: '1rem',
              outline: 'none',
              resize: 'vertical'
            }}
          />
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