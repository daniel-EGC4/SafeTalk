import "./App.css"
import logo from "./assets/logo.jpg"
import React, { useState } from "react";
import ChatApp from "./chat.jsx";
import { useNavigate } from "react-router-dom";



const COLORS = {
  primary: "#6B9BD1",   // azul claro
  primaryDark: "#557FA8",
  accent: "#7ECBB3",    // verde-agua
  accentDark: "#63b79e",
  softPurple: "#B8A6D9",
  bg: "#F5F5F0",
  deepText: "#26323a",
  danger: "#E74C3C",
  white: "#FFFFFF"
};

export function TemaHeader(highContrast, largeText) {
  return {
    header: {
      width: "100%",
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: highContrast ? COLORS.white : COLORS.white,
      boxShadow: "0 4px 10px rgba(0,0,0,0.06)",
      borderBottom: "1px solid rgba(0,0,0,0.04)"
    },
    container: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "18px 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12

    },
    brand: {
      fontFamily: `"Poppins", sans-serif`,
      fontSize: largeText ? 26 : 22,
      fontWeight: 800,
      color: "#8B1538",
      letterSpacing: "0.2px"
    },
    controls: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    },
    button: (isPrimary) => ({
      cursor: "pointer",
      padding: "8px 14px",
      borderRadius: 999,
      border: `2px solid ${COLORS.softPurple}`,
      background: isPrimary ? (highContrast ? COLORS.primaryDark : COLORS.bg) : "transparent",
      color: highContrast ? COLORS.white : COLORS.deepText,
      fontSize: 14,
      fontWeight: 600,
      transition: "transform .15s ease, background .15s ease"
    })
  };
}

export function TemaHero(highContrast, largeText) {
  const titleSize = largeText ? "48px" : "40px";
  const subtitleSize = largeText ? "20px" : "18px";

  return {
    section: {
      padding: "64px 20px",
      color: COLORS.white,
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
      background: highContrast
        ? `linear-gradient(135deg, ${COLORS.primaryDark} 0%, ${COLORS.primary} 100%)`
        : `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.softPurple} 100%)`
    },
    inner: {
      maxWidth: 960,
      margin: "0 auto",
      position: "relative",
      zIndex: 2
    },
    title: {
      fontFamily: `"Poppins", sans-serif`,
      fontSize: titleSize,
      fontWeight: 800,
      lineHeight: 1.05,
      margin: "8px 0 16px"
    },
    subtitle: {
      fontSize: subtitleSize,
      fontWeight: 300,
      marginBottom: 22,
      opacity: 0.95
    },
    actionsRow: {
      display: "flex",
      gap: 14,
      justifyContent: "center",
      flexWrap: "wrap",
      marginTop: 18
    },
    primaryBtn: {
      cursor: "pointer",
      padding: "14px 28px",
      borderRadius: 999,
      background: COLORS.accent,
      color: COLORS.white,
      fontSize: largeText ? 18 : 16,
      fontWeight: 700,
      border: "none",
      boxShadow: "0 10px 24px rgba(0,0,0,0.12)"
    },
    secondaryBtn: {
      cursor: "pointer",
      padding: "14px 28px",
      borderRadius: 999,
      background: "transparent",
      color: COLORS.white,
      fontSize: largeText ? 18 : 16,
      fontWeight: 700,
      border: `2px solid rgba(255,255,255,0.9)`
    },
    tagCapsule: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 12px",
      borderRadius: 999,
      background: "rgba(255,255,255,0.12)",
      fontSize: 14,
      marginTop: 12
    },
    iconsRow: {
      display: "flex",
      gap: 16,
      justifyContent: "center",
      marginTop: 24
    },
    iconCircle: {
      width: 72,
      height: 72,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: `linear-gradient(135deg, ${COLORS.accent}, ${COLORS.softPurple})`,
      fontSize: 28,
      boxShadow: "0 8px 20px rgba(0,0,0,0.12)"
    }
  };
}

export function TemaSeccion(highContrast, largeText) {
  return {
    container: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "48px 20px"
    },
    sectionTitle: {
      fontFamily: `"Poppins", sans-serif`,
      fontSize: largeText ? 36 : 30,
      fontWeight: 800,
      color: COLORS.primary,
      textAlign: "center",
      marginBottom: 28
    },
    grid3: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: 18
    },
    card: {
      background: highContrast ? COLORS.white : COLORS.bg,
      borderRadius: 20,
      padding: 22,
      textAlign: "center",
      boxShadow: "0 8px 18px rgba(12,18,20,0.06)",
      border: `1px solid rgba(0,0,0,0.04)`
    },
    iconBig: {
      fontSize: 48,
      marginBottom: 14
    },
    cardTitle: {
      fontSize: largeText ? 20 : 18,
      fontWeight: 700,
      marginBottom: 8,
      color: COLORS.primaryDark
    },
    cardText: {
      color: "#55686f",
      fontSize: 14,
      lineHeight: 1.4
    }
  };
}

export function TemaBeneficios(highContrast, largeText) {
  return {
    grid4: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: 18
    },
    benefitCard: {
      background: COLORS.white,
      padding: 20,
      borderRadius: 18,
      textAlign: "center",
      boxShadow: "0 8px 24px rgba(11,18,20,0.06)",
      minHeight: 160,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      border: "4px solid transparent"
    },
    benefitTitle: {
      fontWeight: 700,
      fontSize: largeText ? 18 : 16,
      color: COLORS.primaryDark,
      marginTop: 10
    },
    benefitText: {
      fontSize: 13,
      color: "#5f6f78",
      marginTop: 8
    }
  };
}

export function TemaHistorias(highContrast, largeText) {
  return {
    card: {
      borderRadius: 18,
      padding: 20,
      minHeight: 240,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      color: COLORS.white,
      background: `linear-gradient(135deg, ${COLORS.softPurple}, ${COLORS.primary})`,
      boxShadow: "0 12px 28px rgba(0,0,0,0.12)"
    },
    avatar: {
      width: 56,
      height: 56,
      borderRadius: "50%",
      background: "rgba(255,255,255,0.18)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 22,
      marginBottom: 14
    },
    title: {
      fontSize: 16,
      fontWeight: 700,
      marginBottom: 8
    },
    text: {
      fontSize: 13,
      opacity: 0.95
    },
    tagsRow: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginTop: 12
    },
    tag: {
      padding: "6px 10px",
      borderRadius: 999,
      fontSize: 12,
      background: "rgba(255,255,255,0.16)"
    },
    readBtn: {
      padding: "10px 16px",
      borderRadius: 999,
      border: "none",
      background: COLORS.white,
      color: COLORS.primary,
      fontWeight: 700,
      cursor: "pointer"
    }
  };
}

export function TemaTestimonio(highContrast, largeText) {
  return {
    container: {
      maxWidth: 880,
      margin: "0 auto",
      padding: "28px 20px",
      borderRadius: 18,
      background: highContrast ? COLORS.white : COLORS.bg,
      borderLeft: `8px solid ${COLORS.primaryDark}`
    },
    quote: {
      fontStyle: "italic",
      color: "#4e6169",
      fontSize: largeText ? 18 : 16
    },
    author: {
      marginTop: 12,
      fontWeight: 700,
      color: COLORS.primaryDark
    },
    highlight: {
      marginTop: 14,
      fontSize: largeText ? 18 : 16,
      color: COLORS.accent,
      fontWeight: 800
    }
  };
}

export function TemaUrgente() {
  return {
    section: {
      padding: "40px 20px",
      textAlign: "center",
      background: "linear-gradient(135deg, #FFF1E6 0%, #FFEBD2 100%)",
      borderTop: `4px solid ${COLORS.accent}`,
      borderBottom: `4px solid ${COLORS.accent}`
    },
    title: {
      fontSize: 28,
      fontWeight: 800,
      color: COLORS.deepText,
      marginBottom: 10
    },
    text: {
      color: "#55686f",
      fontSize: 16,
      marginBottom: 16
    },
    btn: {
      padding: "12px 20px",
      borderRadius: 999,
      background: COLORS.danger,
      color: COLORS.white,
      fontSize: 16,
      fontWeight: 800,
      border: "none",
      cursor: "pointer",
      boxShadow: "0 12px 28px rgba(231,76,60,0.18)"
    },
    hotline: {
      marginTop: 10,
      fontWeight: 700,
      color: COLORS.deepText
    }
  };
}

export function TemaFooter() {
  return {
    footer: {
      background: COLORS.deepText,
      color: COLORS.white,
      padding: "36px 20px"
    },
    container: {
      maxWidth: 1200,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: 18,
      alignItems: "start"
    },
    title: {
      color: COLORS.accent,
      fontSize: 18,
      fontWeight: 800,
      marginBottom: 10
    },
    smallText: {
      color: "rgba(255,255,255,0.85)",
      fontSize: 13,
      marginBottom: 10
    },
    bottom: {
      borderTop: "1px solid rgba(255,255,255,0.08)",
      marginTop: 20,
      paddingTop: 18,
      textAlign: "center",
      color: "rgba(255,255,255,0.7)"
    },
    badge: {
      display: "inline-block",
      background: COLORS.white,
      color: COLORS.deepText,
      padding: "6px 10px",
      borderRadius: 8,
      fontWeight: 700,
      marginRight: 8,
      fontSize: 12
    }
  };
}

export function TemaBotonFlotante() {
  return {
    button: {
      position: "fixed",
      right: 24,
      bottom: 24,
      zIndex: 999,
      borderRadius: 999,
      padding: "12px 18px",
      display: "flex",
      alignItems: "center",
      gap: 10,
      background: COLORS.accent,
      color: COLORS.white,
      fontWeight: 800,
      boxShadow: "0 16px 36px rgba(0,0,0,0.18)",
      cursor: "pointer",
      border: "none"
    }
  };
}


function CbtisTalks() {
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const headerStyles = TemaHeader(highContrast, largeText);
  const heroStyles = TemaHero(highContrast, largeText);
  const seccionStyles = TemaSeccion(highContrast, largeText);
  const beneficiosStyles = TemaBeneficios(highContrast, largeText);
  const historiasStyles = TemaHistorias(highContrast, largeText);
  const testimonioStyles = TemaTestimonio(highContrast, largeText);
  const urgenteStyles = TemaUrgente();
  const footerStyles = TemaFooter();
  const flotanteStyles = TemaBotonFlotante();

  if (showChat) {
    return <ChatApp />;
  }

  function handleChatClick() {
    alert("Esta funcionalidad se conectaría con el sistema de chat en vivo con psicólogos escolares.");
  }

  function handleNavigateToChat() {
    setShowChat(true);
  }


  return (
    <div style={{ fontFamily: `"Poppins", sans-serif`, background: COLORS.bg, color: COLORS.deepText, minHeight: "100vh" }}>
      {/* Header */}
      <header style={headerStyles.header}>
        <div style={headerStyles.container}>
          <img src={logo} alt="SafeTalk Logo" />
          <div style={headerStyles.brand}></div>

          <div style={headerStyles.controls}>
            <button
              onClick={() => setHighContrast(!highContrast)}
              style={headerStyles.button(true)}
              aria-pressed={highContrast}
              title="Alternar alto contraste"
            >
              Alto Contraste
            </button>

            <button
              onClick={() => setLargeText(!largeText)}
              style={headerStyles.button(false)}
              aria-pressed={largeText}
              title="Alternar texto grande"
            >
              Texto Grande
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section style={heroStyles.section}>
        <div style={heroStyles.inner}>
          <h1 style={heroStyles.title}>No estás solo/a. Aquí te escuchamos sin juzgar</h1>
          <p style={heroStyles.subtitle}>
            Habla de forma anónima con especialistas o comparte tu historia. Tu bienestar importa.
          </p>

          <div style={heroStyles.actionsRow}>
            <button onClick={handleNavigateToChat} style={heroStyles.primaryBtn}>
              💬 Necesito hablar ahora
            </button>

            <button style={heroStyles.secondaryBtn}>
              📖 Explorar historias de superación
            </button>
          </div>

          <div style={heroStyles.tagCapsule}>🔒 100% Confidencial</div>

          <div style={heroStyles.iconsRow}>
            <div style={heroStyles.iconCircle}>👤</div>
            <div style={heroStyles.iconCircle}>👥</div>
            <div style={heroStyles.iconCircle}>🤝</div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section style={{ background: COLORS.white }}>
        <div style={seccionStyles.container}>
          <h2 style={seccionStyles.sectionTitle}>Tres pasos para sentirte mejor</h2>

          <div style={seccionStyles.grid3}>
            {[{
              icon: "✏️",
              title: "Escribe de forma anónima",
              text: "Nadie sabrá quién eres a menos que tú decidas revelarlo. Tu privacidad es nuestra prioridad."
            }, {
              icon: "👨‍⚕️",
              title: "Conecta con un especialista",
              text: "Profesionales de tu escuela disponibles para apoyarte en lo que necesites."
            }, {
              icon: "💖",
              title: "Recibe apoyo continuo",
              text: "Seguimiento personalizado hasta que te sientas mejor. Estamos contigo en cada paso."
            }].map((p, idx) => (
              <article key={idx} style={seccionStyles.card}>
                <div style={seccionStyles.iconBig}>{p.icon}</div>
                <h3 style={seccionStyles.cardTitle}>{p.title}</h3>
                <p style={seccionStyles.cardText}>{p.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section style={{ background: COLORS.bg }}>
        <div style={seccionStyles.container}>
          <h2 style={seccionStyles.sectionTitle}>¿Por qué usar SafeTalk?</h2>

          <div style={beneficiosStyles.grid4}>
            {[{
              icon: "🎭",
              title: "Sin miedo al qué dirán",
              text: "Tu identidad permanece protegida. Habla libremente sin preocupaciones."
            }, {
              icon: "⏰",
              title: "Disponible 24/7",
              text: "Accede cuando lo necesites. Siempre hay alguien para escucharte."
            }, {
              icon: "🎓",
              title: "Ayuda profesional real",
              text: "Psicólogos certificados y especializados en adolescentes."
            }, {
              icon: "🤝",
              title: "Comunidad que entiende",
              text: "Conecta con otros estudiantes que han vivido lo mismo que tú."
            }].map((b, idx) => (
              <div key={idx} style={beneficiosStyles.benefitCard}>
                <div style={{ fontSize: 36 }}>{b.icon}</div>
                <div style={beneficiosStyles.benefitTitle}>{b.title}</div>
                <div style={beneficiosStyles.benefitText}>{b.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: COLORS.white }}>
        <div style={seccionStyles.container}>
          <h2 style={seccionStyles.sectionTitle}>Otros estudiantes que superaron lo que tú estás viviendo</h2>

          <div style={{ display: "grid", gap: 18, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            {[{
              avatar: "🌟",
              title: "Cómo superé el bullying en 3° de secundaria",
              text: "Durante meses sentí que no tenía salida, pero encontré el valor para pedir ayuda. Hoy puedo decir que valió la pena...",
              tags: ["#bullying", "#superación", "#valentía"]
            }, {
              avatar: "💪",
              title: "Vencí la ansiedad antes de los exámenes",
              text: "Los nervios me paralizaban cada vez que había un examen importante. Aprendí técnicas que cambiaron mi vida escolar...",
              tags: ["#ansiedad", "#exámenes", "#éxito"]
            }, {
              avatar: "🦋",
              title: "Recuperé mi autoestima después de sentirme invisible",
              text: "Pensaba que nadie me entendería, pero hablar me ayudó a redescubrir mi valor. Ahora sé que merezco respeto...",
              tags: ["#autoestima", "#aceptación", "#crecimiento"]
            }].map((h, idx) => (
              <article key={idx} style={historiasStyles.card}>
                <div>
                  <div style={historiasStyles.avatar}>{h.avatar}</div>
                  <h3 style={historiasStyles.title}>{h.title}</h3>
                  <p style={historiasStyles.text}>{h.text}</p>
                </div>

                <div>
                  <div style={historiasStyles.tagsRow}>
                    {h.tags.map((t, i) => (
                      <span key={i} style={historiasStyles.tag}>{t}</span>
                    ))}
                  </div>

                  <div style={{ marginTop: 12 }}>
                    <button style={historiasStyles.readBtn}>Leer historia completa</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      <section style={{ background: COLORS.white }}>
        <div style={testimonioStyles.container}>
          <p style={testimonioStyles.quote}>
            "SafeTalk ha sido una herramienta fundamental para crear un ambiente escolar más seguro y empático. Ver a nuestros estudiantes encontrar apoyo y desarrollar resiliencia es invaluable."
          </p>
          <p style={testimonioStyles.author}>- Mtro. Roberto García, Director de Servicios Estudiantiles</p>
          <p style={testimonioStyles.highlight}>✨ Más de 150 estudiantes han encontrado apoyo aquí</p>
        </div>
      </section>


      <section style={urgenteStyles.section}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={urgenteStyles.title}>¿Necesitas ayuda urgente?</h2>
          <p style={urgenteStyles.text}>Si estás en crisis o tienes pensamientos de hacerte daño</p>

          <div style={{ marginTop: 10 }}>
            <button onClick={handleChatClick} style={urgenteStyles.btn}>🚨 Obtener ayuda inmediata</button>
          </div>

          <p style={urgenteStyles.hotline}>📞 Línea de la Vida México: 800 911 2000 | SAPTEL: 55 5259 8121</p>
        </div>
      </section>

      <footer style={footerStyles.footer}>
        <div style={footerStyles.container}>
          <div>
            <div style={footerStyles.title}>SafeTalk</div>
            <div style={footerStyles.smallText}>
              Tu espacio seguro para el bienestar mental. Porque tu salud emocional importa.
            </div>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span style={footerStyles.badge}>🔒 Datos Protegidos</span>
              <span style={footerStyles.badge}>✅ Certificado</span>
            </div>
          </div>

          <div>
            <div style={footerStyles.title}>Enlaces</div>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={footerStyles.smallText}><a href="#" style={{ color: "rgba(255,255,255,0.9)", textDecoration: "none" }}>Sobre nosotros</a></li>
              <li style={footerStyles.smallText}><a href="#" style={{ color: "rgba(255,255,255,0.9)", textDecoration: "none" }}>Privacidad y anonimato</a></li>
              <li style={footerStyles.smallText}><a href="#" style={{ color: "rgba(255,255,255,0.9)", textDecoration: "none" }}>Preguntas frecuentes</a></li>
              <li style={footerStyles.smallText}><a href="#" style={{ color: "rgba(255,255,255,0.9)", textDecoration: "none" }}>Contacto</a></li>
            </ul>
          </div>

          <div>
            <div style={footerStyles.title}>Recursos</div>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={footerStyles.smallText}><a href="#" style={{ color: "rgba(255,255,255,0.9)", textDecoration: "none" }}>Guía para padres</a></li>
              <li style={footerStyles.smallText}><a href="#" style={{ color: "rgba(255,255,255,0.9)", textDecoration: "none" }}>Material educativo</a></li>
              <li style={footerStyles.smallText}><a href="#" style={{ color: "rgba(255,255,255,0.9)", textDecoration: "none" }}>Blog de salud mental</a></li>
              <li style={footerStyles.smallText}><a href="#" style={{ color: "rgba(255,255,255,0.9)", textDecoration: "none" }}>Testimonios</a></li>
            </ul>
          </div>

          <div>
            <div style={footerStyles.title}>Instituciones asociadas</div>
            <div style={footerStyles.smallText}>
              En colaboración con instituciones educativas comprometidas con el bienestar estudiantil.
            </div>
          </div>
        </div>

        <div style={footerStyles.bottom}>
          <div>© 2025 SafeTalk. Todos los derechos reservados.</div>
          <div style={{ marginTop: 6, fontSize: 12 }}>Este servicio complementa pero no sustituye atención psicológica profesional.</div>
        </div>
      </footer>

      <button onClick={handleChatClick} style={flotanteStyles.button} aria-label="Chat con profesionales">
        <span style={{ fontSize: 18 }}>💬</span>
        <span style={{ display: "none", marginLeft: 6 }}>Chat con profesionales</span>
      </button>
    </div>
  );
}

export default CbtisTalks;
