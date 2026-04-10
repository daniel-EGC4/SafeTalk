import { useParams, useNavigate } from "react-router-dom";

function History() {
    // Obtiene el "id" que viene en la URL. Ejemplo: si la URL es /history/3, entonces id = "3"
    const { id } = useParams();

    // Obtiene la lista completa de historias desde el contexto/hook useHistorias
    const { historias } = useHistorias();

    // navigate es una función que sirve para cambiar de página de forma programática.
    // Se obtiene del hook useNavigate de React Router.
    const navigate = useNavigate();

    // .find() recorre el arreglo "historias" uno por uno.
    // Por cada elemento del arreglo, lo llama temporalmente "h" (que representa UNA historia).
    // Compara si h.id es igual al id que vino en la URL (convertido a número con Number()).
    // Cuando encuentra la primera historia que coincide, la guarda en la variable "historia".
    // Si ninguna coincide, "historia" queda como undefined.
    const historia = historias.find(h => h.id === Number(id));

    // Si no se encontró ninguna historia con ese id, muestra un mensaje de error y detiene el renderizado.
    if (!historia) return <p>Historia no encontrada</p>;

    return (
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 20px" }}>

            {/* navigate(-1) significa "regresa a la página anterior del historial del navegador",
                igual que si el usuario presionara el botón de "Atrás" del navegador.
                El -1 indica: retrocede 1 paso. Si fuera -2, retrocedería 2 pasos. */}
            <button onClick={() => navigate(-1)} style={{ marginBottom: 20, cursor: "pointer" }}>
                ← Volver
            </button>

            {/* Muestra el avatar (emoji o imagen) de la historia encontrada */}
            <div style={{ fontSize: 48 }}>{historia.avatar}</div>

            {/* Muestra el título de la historia */}
            <h1>{historia.title}</h1>

            {/* Muestra las etiquetas (tags) de la historia como pastillas de colores */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", margin: "12px 0" }}>
                {historia.tags.map((t, i) => (
                    <span key={i} style={{ padding: "4px 10px", borderRadius: 999, background: "#B8A6D9", color: "#fff", fontSize: 13 }}>
                        {t}
                    </span>
                ))}
            </div>

            {/* Muestra el texto/contenido completo de la historia */}
            <p style={{ lineHeight: 1.8, fontSize: 16 }}>{historia.text}</p>
        </div>
    );
}

export default History;
