export const useStyles = () => {
    const COLORS = {
        primary: "#6B9BD1",
        primaryDark: "#557FA8",
        accent: "#7ECBB3",
        accentDark: "#63b79e",
        softPurple: "#B8A6D9",
        bg: "#F5F5F0",
        deepText: "#26323a",
        danger: "#E74C3C",
        white: "#FFFFFF"
    };

    function TemaHeader() {
        return {
            header: {
                width: "100%",
                position: "sticky",
                top: 0,
                zIndex: 50,
                background: COLORS.white,
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
                fontSize: 22,
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
                background: isPrimary ? COLORS.bg : "transparent",
                color: COLORS.deepText,
                fontSize: 14,
                fontWeight: 600,
                transition: "transform .15s ease, background .15s ease"
            })
        };
    }

    function TemaHero() {
        return {
            section: {
                padding: "64px 20px",
                color: COLORS.white,
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
                background: `linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.softPurple} 100%)`
            },
            inner: {
                maxWidth: 960,
                margin: "0 auto",
                position: "relative",
                zIndex: 2
            },
            title: {
                fontFamily: `"Poppins", sans-serif`,
                fontSize: "40px",
                fontWeight: 800,
                lineHeight: 1.05,
                margin: "8px 0 16px"
            },
            subtitle: {
                fontSize: "18px",
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
                fontSize: 16,
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
                fontSize: 16,
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

    function TemaSeccion() {
        return {
            container: {
                maxWidth: 1200,
                margin: "0 auto",
                padding: "48px 20px"
            },
            sectionTitle: {
                fontFamily: `"Poppins", sans-serif`,
                fontSize: 30,
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
                background: COLORS.bg,
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
                fontSize: 18,
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

    function TemaBeneficios() {
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
                fontSize: 16,
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

    function TemaHistorias() {
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

    function TemaTestimonio() {
        return {
            container: {
                maxWidth: 880,
                margin: "0 auto",
                padding: "28px 20px",
                borderRadius: 18,
                background: COLORS.bg,
                borderLeft: `8px solid ${COLORS.primaryDark}`
            },
            quote: {
                fontStyle: "italic",
                color: "#4e6169",
                fontSize: 16
            },
            author: {
                marginTop: 12,
                fontWeight: 700,
                color: COLORS.primaryDark
            },
            highlight: {
                marginTop: 14,
                fontSize: 16,
                color: COLORS.accent,
                fontWeight: 800
            }
        };
    }

    function TemaUrgente() {
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

    function TemaFooter() {
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

    function TemaBotonFlotante() {
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

    return { COLORS, TemaHeader, TemaHero, TemaSeccion, TemaBeneficios, TemaHistorias, TemaTestimonio, TemaUrgente, TemaFooter, TemaBotonFlotante };
};

export default useStyles;