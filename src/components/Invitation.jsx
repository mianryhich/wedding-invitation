import invitationBg from '../assets/flower-bg.png';

function Invitation() {
    return (
        <section id="invitation" style={{
            width: '100%',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            backgroundImage: `url(${invitationBg})`,
            backgroundSize: 'auto 200%',
            backgroundPosition: 'left center',
            backgroundAttachment: 'fixed', // параллакс-эффект (опционально)
            padding: '4rem 1rem'
        }}>

            {/* Белая полупрозрачная подложка для текста */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '20px',
        padding: '3rem',
        maxWidth: '800px',
        width: '100%',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '2.5rem',
          color: '#4a3728',
          marginBottom: '1.5rem'
        }}>
          Дорогой Гость!
        </h2>

        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.1rem',
          lineHeight: '1.8',
          color: '#333',
          marginBottom: '2rem',
          fontStyle: 'italic'
        }}>
          Мы рады сообщить, что наша свадьба пройдет 7 и 8 августа 2026 года.
        </p>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          <div style={{
            borderLeft: '3px solid #c2a77a',
            paddingLeft: '1.5rem',
            textAlign: 'left'
          }}>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.3rem',
              fontWeight: 'bold',
              color: '#c2a77a'
            }}>
              7 августа 2026
            </div>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.1rem',
              color: '#4a3728'
            }}>
              Москва — Торжественная регистрация брака
            </div>
          </div>

          <div style={{
            borderLeft: '3px solid #c2a77a',
            paddingLeft: '1.5rem',
            textAlign: 'left'
          }}>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.3rem',
              fontWeight: 'bold',
              color: '#c2a77a'
            }}>
              8 августа 2026
            </div>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.1rem',
              color: '#4a3728'
            }}>
              Владимир — Свадебный банкет
            </div>
          </div>
        </div>

        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '1.1rem',
          lineHeight: '1.8',
          color: '#333',
          fontStyle: 'italic'
        }}>
          Приглашаем вас разделить с нами радость этого незабываемого дня!
        </p>

        {/* Блок МЕНЮ */}
        <div style={{
            paddingTop: "5rem"
        }}>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '2rem',
            color: '#4a3728',
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            МЕНЮ
          </h3>

          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '1rem',
            lineHeight: '1.7',
            color: '#555',
            textAlign: 'center'
          }}>
            Меню разнообразно, поэтому сообщите нам заранее, если у вас есть какие-либо 
            предпочтения или диетические ограничения. После подтверждения вы сможете 
            пройти опрос о своих вкусовых предпочтениях и напитках.
          </p>
        </div>

        {/* Блок ПОЖЕЛАНИЯ ПО ПОДАРКАМ */}
            <div style={{
            paddingTop: "5rem"
        }}>
                <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '2rem',
                    color: '#4a3728',
                    marginBottom: '1rem',
                    textAlign: 'center'
                }}>
                    ПОЖЕЛАНИЯ ПО ПОДАРКАМ
                </h3>
                <p style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: '#555',
                    textAlign: 'center',
                    marginBottom: '1rem'
                }}>
                    Ваше присутствие в день нашей свадьбы - самый значимый подарок для нас!
                </p>
                <p style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: '#555',
                    textAlign: 'center'
                }}>
                    Мы понимаем, что дарить цветы на свадьбу - это традиция, но мы не сможем 
                    насладиться их красотой в полной мере... Будем рады любой другой альтернативе 
                    (вино или в денежном эквиваленте).
                </p>
            </div>


            {/* Блок ДРЕСС-КОД */}
            <div style={{
                paddingTop: "5rem"}}
                >
                <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '2rem',
                    color: '#4a3728',
                    marginBottom: '1rem',
                    textAlign: 'center'
                }}>
                    ДРЕСС-КОД
                </h3>
                
                <p style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: '#555',
                    textAlign: 'center',
                    marginBottom: '1rem'
                }}>
                    Мы будем рады видеть вас в элегантных нарядах, которые подчеркнут особую атмосферу нашего праздника
                </p>
                
                <p style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                    color: '#777',
                    textAlign: 'center',
                    marginBottom: '0.5rem'
                }}>
                    <strong>Для мужчин:</strong> брюки и рубашка. Пиджак, галстук, бабочка —  по желанию.
                </p>
                
                <p style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                    color: '#777',
                    textAlign: 'center',
                    marginBottom: '1rem'
                }}>
                    <strong>Для женщин:</strong> наряды однотонного исполнения.
                </p>
                
                <p style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '0.9rem',
                    lineHeight: '1.6',
                    color: '#a0896b',
                    textAlign: 'center',
                    fontStyle: 'italic'
                }}>
                    Буду благодарна, если при выборе нарядов на наше торжество вы придержитесь следующей палитры:
                </p>
                
                {/* Примеры цветов */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    flexWrap: 'wrap',
                    marginTop: '1.5rem'
                }}>
                    <div style={{
                        width: '45px',
                        height: '45px',
                        borderRadius: '50%',
                        background: '#91a886',
                        border: '1px solid #7a996b'
                    }} title="Пастельно-зелёный"></div>
                    <div style={{
                        width: '45px',
                        height: '45px',
                        borderRadius: '50%',
                        background: '#8dbad8',
                        border: '1px solid #8bb1ca'
                    }} title="Пастельно-синий"></div>
                    <div style={{
                        width: '45px',
                        height: '45px',
                        borderRadius: '50%',
                        background: '#285f92',
                        border: '1px solid #29648b'
                    }} title="Пастельно-синий"></div>
                    <div style={{
                        width: '45px',
                        height: '45px',
                        borderRadius: '50%',
                        border: '1px solid #eebccb',
                        background: '#e6c4c9',
                    }} title="Розовый"></div>
                    <div style={{
                        width: '45px',
                        height: '45px',
                        borderRadius: '50%',
                        background: '#e6cdb7',
                        border: '1px solid #d4bca8'
                    }} title="Коричневый"></div>
                    <div style={{
                        width: '45px',
                        height: '45px',
                        borderRadius: '50%',
                        background: '#57342a',
                        border: '1px solid #e0d0c0'
                    }} title="Бежевый"></div>
                    <div style={{
                        width: '45px',
                        height: '45px',
                        borderRadius: '50%',
                        background: '#1d1d1d',
                        border: '1px solid #e0d0c0'
                    }} title="Бежевый"></div>

                </div>
            </div>

        {/* Декоративная линия */}
        <div style={{
          width: '60px',
          height: '2px',
          background: '#c2a77a',
          margin: '2rem auto 0'
        }}></div>
      </div>
        </section>
    );
}

export default Invitation;