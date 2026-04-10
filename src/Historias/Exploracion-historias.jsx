import React, { useState } from "react";
import useStyles from "../SafeTalk/Estilos";

function explorer() {
    return (
        <header style={headerStyles.header}>
            <div style={headerStyles.container}>
                <img src={logo} alt="SafeTalk Logo" />
                <div style={headerStyles.brand}></div>
            </div>
        </header>

    )
}