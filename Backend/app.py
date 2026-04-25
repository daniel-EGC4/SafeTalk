import sys
sys.stdout = sys.stderr

from flask import Flask, jsonify, request
from flask_cors import CORS
from database import init_db, get_db_connection
import datetime

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])

@app.route('/api/mensajes', methods=['GET'])
def obtener_mensajes():
    conn = get_db_connection()
    mensajes = conn.execute('SELECT * FROM mensajes ORDER BY created_at DESC').fetchall()
    conn.close()
    return jsonify([dict(msg) for msg in mensajes])

@app.route('/api/mensajes', methods=['POST'])
def crear_mensaje():
    data = request.get_json()
    if not data:
        return jsonify({'error': 'No se recibieron datos'}), 400
    texto = data.get('texto', '').strip()
    archivo_nombre = data.get('archivo_nombre', None)
    if not texto and not archivo_nombre:
        return jsonify({'error': 'El mensaje no puede estar vacío'}), 400
    conn = get_db_connection()
    conn.execute(
        'INSERT INTO mensajes (texto, archivo_nombre, created_at) VALUES (?, ?, ?)',
        (texto, archivo_nombre, datetime.datetime.now().isoformat())
    )
    conn.commit()
    conn.close()
    return jsonify({'ok': True}), 201

@app.route('/api/historias', methods=['GET'])
def obtener_historias():
    conn = get_db_connection()
    historias = conn.execute('SELECT * FROM historias').fetchall()
    conn.close()
    return jsonify([dict(h) for h in historias])

print("Arrancando servidor...", flush=True)
init_db()
app.run(debug=False, port=5000, use_reloader=False)
