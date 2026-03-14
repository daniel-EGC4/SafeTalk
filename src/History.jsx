import { useParams, useNavigate } from "react-router-dom";
import { useHistorias } from "./hooks/useHistorias.jsx";

function History() {
    const { id } = useParams();
    const { historias } = useHistorias();
    const navigate = useNavigate();

    const historia = historias.find(h => h.id === Number(id));

    if (!historia) return <p>Historia no encontrada</p>;

    return (
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>
            <button onClick={() => navigate(-1)} style={{ marginBottom: 20, cursor: "pointer" }}>
                ← Volver
            </button>

            <div style={{ fontSize: 48 }}>{historia.avatar}</div>
            <h1>{historia.title}</h1>

            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", margin: "12px 0" }}>
                {historia.tags.map((t, i) => (
                    <span key={i} style={{ padding: "4px 10px", borderRadius: 999, background: "#B8A6D9", color: "#fff", fontSize: 13 }}>
                        {t}
                    </span>
                ))}
            </div>

            <p style={{ lineHeight: 1.8, fontSize: 16 }}>{historia.text}</p>
        </div>
    );
}

export default History;