# SafeTalk

Una aplicación web de chat intuitiva que permite mantener conversaciones en tiempo real y explorar un historial organizado de historias. Combina la facilidad de uso de una interfaz moderna con un backend robusto.

## Características principales

- **Mensajería en tiempo real** — Envía y recibe mensajes de texto de forma instantánea
- **Soporte de archivos** — Comparte archivos junto con tus mensajes
- **Historial de conversaciones** — Accede a todos tus mensajes previos organizadamente
- **Explorador de historias** — Navega y descubre historias guardadas
- **Interfaz responsiva** — Funciona perfectamente en dispositivos de escritorio y móviles

## Requisitos previos

Antes de empezar, asegúrate de tener instalado:

- **Node.js** (v16 o superior)
- **Python** (v3.8 o superior)
- **pip** (gestor de paquetes de Python)

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/tuusuario/SafeTalk.git
cd SafeTalk
```

### 2. Configurar el frontend

```bash
# Instalar dependencias
npm install
```

### 3. Configurar el backend

```bash
# Navegar a la carpeta del backend
cd Backend

# Crear un entorno virtual (opcional pero recomendado)
python -m venv venv

# Activar el entorno virtual
# En Windows:
venv\Scripts\activate
# En macOS/Linux:
source venv/bin/activate

# Instalar dependencias
pip install flask flask-cors
```

## Cómo ejecutar

### Iniciar el backend

```bash
# Desde la carpeta Backend
python app.py
```

El servidor estará disponible en `http://localhost:5000`

### Iniciar el frontend

```bash
# Desde la raíz del proyecto
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## Comandos útiles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo con hot reload

# Producción
npm run build        # Compila la aplicación para producción
npm run preview      # Visualiza la compilación en local

# Calidad de código
npm run lint         # Verifica la calidad del código con ESLint
```

## Estructura del proyecto

```
SafeTalk/
├── Backend/              # Servidor Flask
│   ├── app.py           # API REST y configuración
│   └── database.py      # Gestión de base de datos
├── src/                 # Código fuente de React
│   ├── SafeTalk/        # Componente principal de chat
│   ├── Chat/            # Componente de mensajería
│   ├── Historias/       # Gestión de historial
│   ├── Styles/          # Estilos CSS
│   └── data/            # Datos estáticos
├── public/              # Archivos públicos
├── package.json         # Dependencias del frontend
└── vite.config.js       # Configuración de Vite
```

## Tecnologías utilizadas

**Frontend:**
- React 19 — Biblioteca para interfaces de usuario
- Vite — Herramienta de construcción ultrarrápida
- React Router — Navegación entre páginas
- CSS — Estilos personalizados

**Backend:**
- Flask — Framework web minimalista
- SQLite — Base de datos ligera
- Flask-CORS — Manejo de solicitudes entre orígenes

## Notas de desarrollo

- El frontend y backend se ejecutan en puertos diferentes (`5173` y `5000` respectivamente)
- CORS está configurado para aceptar solicitudes desde `localhost:5173`
- La base de datos se inicializa automáticamente al ejecutar `app.py`

## Próximos pasos

¿Quieres explorar la aplicación? Después de ejecutar ambos servidores, abre el navegador y comienza a chatear.

## Licencia

Este proyecto está disponible bajo la licencia MIT.
