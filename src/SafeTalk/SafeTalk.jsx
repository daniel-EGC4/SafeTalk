import "../Styles/App.css"
import logo from "../assets/logo.jpg"
import React, { useState } from "react";
import ChatApp from "../Chat/chat.jsx";
import { useNavigate } from "react-router-dom";
import useStyles from "./Estilos.jsx";
import historiasData from "../data/historias.json";
import Explorer from "../Historias/Exploracion-historias.jsx";

const useHistorias = () => {
    return { historias: historiasData, loading: false };
};

function SafeTalk() {
    const [showChat, setShowChat] = useState(false);
    const { historias, loading } = useHistorias();
    const [showExplorer, setShowExplorer] = useState(false);
    const navigate = useNavigate();

    const { COLORS, TemaHeader, TemaHero, TemaSeccion, TemaBeneficios,
        TemaHistorias, TemaTestimonio, TemaUrgente, TemaFooter, TemaBotonFlotante } = useStyles();

    const headerStyles = TemaHeader();
    const heroStyles = TemaHero();
    const seccionStyles = TemaSeccion();
    const beneficiosStyles = TemaBeneficios();
    const historiasStyles = TemaHistorias();
    const testimonioStyles = TemaTestimonio();
    const urgenteStyles = TemaUrgente();
    const footerStyles = TemaFooter();
    const flotanteStyles = TemaBotonFlotante();


    if (showChat) return <ChatApp />;

    function handleChatClick() {
        alert("Esta funcionalidad te permitira agendar una cita en una clinica de salud mental cercana con facilidad y rapidez.");
    }
    function handleNavigateToExplorer() {
        setShowExplorer(true);
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

                        <button onClick={handleNavigateToExplorer} style={heroStyles.secondaryBtn}>
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
                    <h2 style={seccionStyles.sectionTitle}>
                        Otros estudiantes que superaron lo que tú estás viviendo
                    </h2>

                    {loading ? (
                        <p style={{ textAlign: "center" }}>Cargando historias...</p>
                    ) : (
                        <div style={{ display: "grid", gap: 18, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
                            {historias.map((h) => (
                                <article key={h.id} style={historiasStyles.card}>
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
                                            {/* Navega a History.jsx pasando el id */}
                                            <button
                                                style={historiasStyles.readBtn}
                                                onClick={() => navigate(`/historia/${h.id}`)}
                                            >
                                                Leer historia completa
                                            </button>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
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
                        <div style={footerStyles.title}>Soporte técnico</div>
                        <ul style={{ listStyle: "none", padding: 0 }}>
                            <li style={footerStyles.smallText}>23308051220786@cbtis122.edu.mx</li>
                            <li style={footerStyles.smallText}>23308051220797@cbtis122.edu.mx</li>
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

export default SafeTalk;
