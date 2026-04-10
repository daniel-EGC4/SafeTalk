import React, { useState } from "react";
import useStyles from "../SafeTalk/Estilos";

function explorer() {
    return (
        <>
            <header style={headerStyles.header}>
                <div style={headerStyles.container}>
                    <img src={logo} alt="SafeTalk Logo" />
                    <div style={headerStyles.brand}></div>
                </div>
            </header>
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
        </>

    )
}