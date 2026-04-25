import sqlite3

DATABASE = 'safetalk.db'

def get_db_connection():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db_connection()
    
    conn.execute('''
        CREATE TABLE IF NOT EXISTS mensajes (
            id             INTEGER PRIMARY KEY AUTOINCREMENT,
            texto          TEXT,
            archivo_nombre TEXT,
            created_at     TEXT NOT NULL
        )
    ''')
    
    conn.execute('''
        CREATE TABLE IF NOT EXISTS historias (
            id     INTEGER PRIMARY KEY AUTOINCREMENT,
            avatar TEXT NOT NULL,
            title  TEXT NOT NULL,
            text   TEXT NOT NULL,
            tags   TEXT NOT NULL
        )
    ''')
    
    conn.commit()
    conn.close()
    print("✅ Base de datos lista")
