import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStyles from "./Estilos.jsx";
import historiasData from "./data/historias.json";
import logo from "./assets/logo.jpg";

// ── Estilos ──────────────────────────────────────────────────────────────────

function useExplorerStyles(COLORS) {
    function TemaGrid() {
        return {
            section: {
                background: COLORS.bg,
                padding: "48px 20px",
            },
            container: {
                maxWidth: 1200,
                margin: "0 auto",
            },
            grid: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: 24,
                marginTop: 12,
            },
        };
    }

    function TemaCard() {
        return {
            card: {
                borderRadius: 18,
                padding: 24,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 16,
                background: `linear-gradient(135deg, ${COLORS.softPurple}, ${COLORS.primary})`,
                color: COLORS.white,
                boxShadow: "0 12px 28px rgba(0,0,0,0.12)",
                cursor: "pointer",
                transition: "transform 0.18s ease, box-shadow 0.18s ease",
            },
            cardHover: {
                transform: "translateY(-4px)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.18)",
            },
            avatar: {
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.18)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 26,
                marginBottom: 4,
            },
            title: {
                fontSize: 17,
                fontWeight: 700,
                lineHeight: 1.3,
            },
            preview: {
                fontSize: 13,
                opacity: 0.92,
                lineHeight: 1.5,
            },
            tagsRow: {
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
                marginTop: 4,
            },
            tag: {
                padding: "5px 10px",
                borderRadius: 999,
                fontSize: 12,
                background: "rgba(255,255,255,0.16)",
            },
            readBtn: {
                alignSelf: "flex-start",
                padding: "10px 18px",
                borderRadius: 999,
                border: "none",
                background: COLORS.white,
                color: COLORS.primary,
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
            },
        };
    }

    function TemaModal() {
        return {
            overlay: {
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.55)",
                zIndex: 200,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 20,
            },
            box: {
                background: COLORS.white,
                borderRadius: 20,
                padding: "36px 32px",
                maxWidth: 640,
                width: "100%",
                maxHeight: "80vh",
                overflowY: "auto",
                position: "relative",
                boxShadow: "0 24px 60px rgba(0,0,0,0.22)",
            },
            avatarBig: {
                fontSize: 52,
                marginBottom: 12,
            },
            title: {
                fontSize: 24,
                fontWeight: 800,
                color: COLORS.primaryDark,
                marginBottom: 12,
                lineHeight: 1.2,
            },
            tagsRow: {
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
                marginBottom: 20,
            },
            tag: {
                padding: "5px 12px",
                borderRadius: 999,
                background: COLORS.softPurple,
                color: COLORS.white,
                fontSize: 13,
                fontWeight: 600,
            },
            text: {
                fontSize: 15,
                lineHeight: 1.8,
                color: "#4e6169",
            },
            closeBtn: {
                position: "absolute",
                top: 16,
                right: 16,
                background: "transparent",
                border: "none",
                fontSize: 22,
                cursor: "pointer",
                color: COLORS.deepText,
                fontWeight: 700,
            },
        };
    }

    return { TemaGrid, TemaCard, TemaModal };
}

// ── Sub-componentes ───────────────────────────────────────────────────────────

function StoryCard({ historia, cardStyles, onOpen }) {
    const [hovered, setHovered] = useState(false);

    const cardStyle = hovered
        ? { ...cardStyles.card, ...cardStyles.cardHover }
        : cardStyles.card;

    return (
        <article
            style={cardStyle}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div>
                <div style={cardStyles.avatar}>{historia.avatar}</div>
                <p style={cardStyles.title}>{historia.title}</p>
                <p style={cardStyles.preview}>{historia.preview}</p>
            </div>

            <div>
                <div style={cardStyles.tagsRow}>
                    {historia.tags.map((t, i) => (
                        <span key={i} style={cardStyles.tag}>{t}</span>
                    ))}
                </div>
                <button style={cardStyles.readBtn} onClick={() => onOpen(historia)}>
                    Leer historia completa
                </button>
            </div>
        </article>
    );
}

function StoryModal({ historia, modalStyles, onClose }) {
    if (!historia) return null;

    return (
        <div style={modalStyles.overlay} onClick={onClose}>
            <div style={modalStyles.box} onClick={(e) => e.stopPropagation()}>
                <button style={modalStyles.closeBtn} onClick={onClose}>✕</button>

                <div style={modalStyles.avatarBig}>{historia.avatar}</div>
                <h2 style={modalStyles.title}>{historia.title}</h2>

                <div style={modalStyles.tagsRow}>
                    {historia.tags.map((t, i) => (
                        <span key={i} style={modalStyles.tag}>{t}</span>
                    ))}
                </div>

                <p style={modalStyles.text}>{historia.text}</p>
            </div>
        </div>
    );
}

// ── Página principal ──────────────────────────────────────────────────────────

function Explorer() {
    const [selected, setSelected] = useState(null);

    const { COLORS, TemaHeader, TemaHero } = useStyles();
    const { TemaGrid, TemaCard, TemaModal } = useExplorerStyles(COLORS);

    const headerStyles = TemaHeader();
    const heroStyles = TemaHero();
    const gridStyles = TemaGrid();
    const cardStyles = TemaCard();
    const modalStyles = TemaModal();

    return (
        <div style={{ fontFamily: `"Poppins", sans-serif`, background: COLORS.bg, color: COLORS.deepText, minHeight: "100vh" }}>

            {/* Header — idéntico al de SafeTalk */}
            <header style={headerStyles.header}>
                <div style={headerStyles.container}>
                    <img src={logo} alt="SafeTalk Logo" />
                    <div style={headerStyles.brand}></div>
                </div>
            </header>

            {/* Hero */}
            <section style={heroStyles.section}>
                <div style={heroStyles.inner}>
                    <h1 style={heroStyles.title}>Explora historias de superación</h1>
                    <p style={heroStyles.subtitle}>
                        Estas historias pueden enseñarte formas de superar tus problemas.
                    </p>
                </div>
            </section>

            {/* Grid de historias */}
            <section style={gridStyles.section}>
                <div style={gridStyles.container}>
                    <div style={gridStyles.grid}>
                        {historiasData.map((h) => (
                            <StoryCard
                                key={h.id}
                                historia={h}
                                cardStyles={cardStyles}
                                onOpen={setSelected}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            <StoryModal
                historia={selected}
                modalStyles={modalStyles}
                onClose={() => setSelected(null)}
            />
        </div>
    );
}

export default Explorer;