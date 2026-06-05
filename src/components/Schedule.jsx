// src/components/Schedule.jsx
function Schedule() {
  return (
    <section id="schedule" style={{
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#f9f5f0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem 1rem'
    }}>
      <div style={{
        maxWidth: '800px',
        width: '100%',
        padding: '3rem'
      }}>
        
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '2.5rem',
          color: '#4a3728',
          textAlign: 'center',
          marginBottom: '3rem',
          letterSpacing: '2px'
        }}>
          Свадебное расписание
        </h2>

        {/* Событие 1: Регистрация */}
        <div style={{
          marginBottom: '2.5rem',
          paddingBottom: '2rem',
          borderBottom: '1px solid #e0d0c0'
        }}>
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ minWidth: '120px' }}>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.8rem',
                fontWeight: 'bold',
                color: '#c2a77a'
              }}>
                13:00
              </div>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1rem',
                color: '#8b7355'
              }}>
                07.08.2026
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.3rem',
                fontWeight: 'bold',
                color: '#4a3728',
                marginBottom: '0.5rem'
              }}>
                Торжественная регистрация брака
              </div>
              
              {/* Адрес + ссылка */}
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1rem',
                color: '#c2a77a',
                marginBottom: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                flexWrap: 'wrap'
              }}>
                Дубравная ул., 48А, Москва
                <a 
                  href="https://yandex.ru/maps/?text=Дубравная+ул.,+48А,+Москва"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#c2a77a',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    borderBottom: '1px solid #c2a77a',
                    padding: '0 0 2px 0'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#4a3728'}
                  onMouseLeave={(e) => e.target.style.color = '#c2a77a'}
                >
                  Открыть на карте ↗
                </a>
              </div>
              
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '0.95rem',
                color: '#8b7355',
                lineHeight: '1.5'
              }}>
                Наша регистрация пройдет в Митинском Дворце бракосочетания, 
                приглашаем всех разделить с нами такой торжественный момент
              </div>
            </div>
          </div>
        </div>

        {/* Событие 2: Банкет */}
        <div>
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ minWidth: '120px' }}>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.8rem',
                fontWeight: 'bold',
                color: '#c2a77a'
              }}>
                17:00
              </div>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1rem',
                color: '#8b7355'
              }}>
                08.08.2026
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.3rem',
                fontWeight: 'bold',
                color: '#4a3728',
                marginBottom: '0.5rem'
              }}>
                Праздничный банкет
              </div>
              
              {/* Адрес + ссылка */}
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1rem',
                color: '#c2a77a',
                marginBottom: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                flexWrap: 'wrap'
              }}>
                Банкетный зал, Владимир
                <a 
                  href="https://yandex.ru/maps/?text=Владимир+банкетный+зал"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#c2a77a',
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    borderBottom: '1px solid #c2a77a',
                    padding: '0 0 2px 0'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#4a3728'}
                  onMouseLeave={(e) => e.target.style.color = '#c2a77a'}
                >
                  Открыть на карте ↗
                </a>
              </div>
              
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '0.95rem',
                color: '#8b7355',
                lineHeight: '1.5'
              }}>
                Здесь пройдет наш праздничный банкет
              </div>
            </div>
          </div>
        </div>

        {/* Декоративная линия */}
        <div style={{
          width: '60px',
          height: '2px',
          background: '#c2a77a',
          margin: '3rem auto 0'
        }}></div>
      </div>
    </section>
  );
}

export default Schedule;