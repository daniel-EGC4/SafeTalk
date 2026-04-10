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
                    <h1 style={heroStyles.title}>Explora historias de superación</h1>
                    <p style={heroStyles.subtitle}>
                        Estas historias pueden ense&ntilde;arte formas de superar tus problemas.
                    </p>
                </div>
            </section>
        </>

    )
}