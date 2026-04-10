import React, { useState } from 'react';
import SafeTalk from './App';

function HomePage({ onNavigate }) {
    const [showApp, setShowApp] = useState(false);
    if (showApp) {
        return <SafeTalk />;
    };
    function handleNavigateToApp() {
        setShowApp(true);
    }
    return (
        <>
            <div style={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px'
            }}>

                
                <div style={{ justifyContent: 'start', flexDirection: 'column', position: 'absolute', top: '20px', left: '20px', color: 'white' }}>
                    <button onClick={handleNavigateToApp}>Ir a SafeTalk</button>
                </div>
                <div style={{
                    textAlign: 'center',
                    maxWidth: '800px'
                }}>
                    <div style={{
                        background: '#1a1a2e',
                        borderRadius: '20px',
                        padding: '60px 40px',
                        boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
                    }}>
                        <div style={{
                            fontSize: '80px',
                            marginBottom: '20px'
                        }}>💬</div>

                        <h1 style={{
                            fontSize: '48px',
                            color: 'white',
                            marginBottom: '20px',
                            fontWeight: 'bold'
                        }}>
                            Chat Anónimo
                        </h1>

                        <p style={{
                            color: '#b8b8d1',
                            fontSize: '18px',
                            marginBottom: '40px',
                            lineHeight: '1.6'
                        }}>
                            Comparte tus pensamientos de forma anónima y segura. Sin registro, sin formularios.
                        </p>

                        <button
                            onClick={() => onNavigate('chat')}
                            style={{
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                color: 'white',
                                border: 'none',
                                padding: '18px 40px',
                                fontSize: '20px',
                                borderRadius: '10px',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
                                transition: 'transform 0.2s'
                            }}
                            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                        >
                            Entrar al Chat
                        </button>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                            gap: '20px',
                            marginTop: '50px'
                        }}>
                            <div style={{
                                background: '#16213e',
                                padding: '30px',
                                borderRadius: '15px'
                            }}>
                                <div style={{ fontSize: '40px', marginBottom: '10px' }}>🔒</div>
                                <h3 style={{ color: 'white', marginBottom: '10px' }}>100% Anónimo</h3>
                                <p style={{ color: '#8d8d9f', fontSize: '14px' }}>
                                    No requiere registro
                                </p>
                            </div>

                            <div style={{
                                background: '#16213e',
                                padding: '30px',
                                borderRadius: '15px'
                            }}>
                                <div style={{ fontSize: '40px', marginBottom: '10px' }}>📎</div>
                                <h3 style={{ color: 'white', marginBottom: '10px' }}>Adjunta Archivos</h3>
                                <p style={{ color: '#8d8d9f', fontSize: '14px' }}>
                                    Comparte archivos fácilmente
                                </p>
                            </div>

                            <div style={{
                                background: '#16213e',
                                padding: '30px',
                                borderRadius: '15px'
                            }}>
                                <div style={{ fontSize: '40px', marginBottom: '10px' }}>⚡</div>
                                <h3 style={{ color: 'white', marginBottom: '10px' }}>Rápido y Simple</h3>
                                <p style={{ color: '#8d8d9f', fontSize: '14px' }}>
                                    Interfaz sin complicaciones
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function ChatPage({ onNavigate }) {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const [attachedFile, setAttachedFile] = useState(null);
    const maxChars = 500;

    const handleSendMessage = () => {
        if (inputText.trim() || attachedFile) {
            const newMessage = {
                id: Date.now(),
                text: inputText.trim(),
                file: attachedFile,
                timestamp: new Date().toLocaleTimeString('es-MX', {
                    hour: '2-digit',
                    minute: '2-digit'
                })
            };

            setMessages([...messages, newMessage]);
            setInputText('');
            setAttachedFile(null);
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setAttachedFile({
                name: file.name,
                size: (file.size / 1024).toFixed(2) + ' KB',
                type: file.type
            });
        }
    };

    const handleRemoveFile = () => {
        setAttachedFile(null);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
        }}>
            <div style={{
                width: '100%',
                maxWidth: '800px',
                background: '#1a1a2e',
                borderRadius: '20px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                overflow: 'hidden'
            }}>
                {/* Header */}
                <div style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <button
                        onClick={() => onNavigate('home')}
                        style={{
                            background: 'rgba(255,255,255,0.2)',
                            color: 'white',
                            border: 'none',
                            padding: '10px 20px',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            fontSize: '14px'
                        }}
                    >
                        ← Inicio
                    </button>
                    <h1 style={{
                        color: 'white',
                        fontSize: '24px',
                        margin: 0
                    }}>Chat Anónimo</h1>
                    <div style={{ width: '80px' }}></div>
                </div>

                {/* Messages Container */}
                <div style={{
                    height: '400px',
                    overflowY: 'auto',
                    padding: '20px',
                    background: '#16213e'
                }}>
                    {messages.length === 0 ? (
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100%',
                            color: '#8d8d9f'
                        }}>
                            <p>No hay mensajes aún. ¡Sé el primero en escribir!</p>
                        </div>
                    ) : (
                        messages.map((msg) => (
                            <div key={msg.id} style={{
                                background: '#0f3460',
                                borderRadius: '10px',
                                padding: '15px',
                                marginBottom: '15px',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    marginBottom: '8px'
                                }}>
                                    <span style={{
                                        color: '#667eea',
                                        fontWeight: 'bold'
                                    }}>Anónimo</span>
                                    <span style={{
                                        color: '#8d8d9f',
                                        fontSize: '12px'
                                    }}>{msg.timestamp}</span>
                                </div>
                                {msg.text && (
                                    <p style={{
                                        color: '#e8e8f5',
                                        margin: 0,
                                        whiteSpace: 'pre-wrap',
                                        wordBreak: 'break-word'
                                    }}>{msg.text}</p>
                                )}
                                {msg.file && (
                                    <div style={{
                                        marginTop: '10px',
                                        background: '#1a1a2e',
                                        borderRadius: '8px',
                                        padding: '10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px'
                                    }}>
                                        <span style={{ fontSize: '20px' }}>📎</span>
                                        <div style={{ flex: 1 }}>
                                            <p style={{
                                                color: '#e8e8f5',
                                                fontSize: '14px',
                                                margin: 0,
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap'
                                            }}>{msg.file.name}</p>
                                            <p style={{
                                                color: '#8d8d9f',
                                                fontSize: '12px',
                                                margin: 0
                                            }}>{msg.file.size}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </div>

                {/* Input Area */}
                <div style={{
                    background: '#1a1a2e',
                    padding: '20px',
                    borderTop: '1px solid #0f3460'
                }}>
                    {/* Attached File Preview */}
                    {attachedFile && (
                        <div style={{
                            marginBottom: '15px',
                            background: '#0f3460',
                            borderRadius: '8px',
                            padding: '10px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                flex: 1,
                                minWidth: 0
                            }}>
                                <span style={{ fontSize: '20px' }}>📎</span>
                                <div style={{ flex: 1, minWidth: 0 }}>
                                    <p style={{
                                        color: '#e8e8f5',
                                        fontSize: '14px',
                                        margin: 0,
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap'
                                    }}>{attachedFile.name}</p>
                                    <p style={{
                                        color: '#8d8d9f',
                                        fontSize: '12px',
                                        margin: 0
                                    }}>{attachedFile.size}</p>
                                </div>
                            </div>
                            <button
                                onClick={handleRemoveFile}
                                style={{
                                    background: 'transparent',
                                    color: '#ff6b6b',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: '20px',
                                    padding: '5px'
                                }}
                            >
                                ✕
                            </button>
                        </div>
                    )}

                    {/* Input Container */}
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <div style={{ flex: 1, position: 'relative' }}>
                            <textarea
                                value={inputText}
                                onChange={(e) => {
                                    if (e.target.value.length <= maxChars) {
                                        setInputText(e.target.value);
                                    }
                                }}
                                onKeyPress={handleKeyPress}
                                placeholder="Escribe tu mensaje anónimo..."
                                style={{
                                    width: '100%',
                                    background: '#0f3460',
                                    color: '#e8e8f5',
                                    border: 'none',
                                    borderRadius: '10px',
                                    padding: '15px',
                                    paddingRight: '60px',
                                    resize: 'none',
                                    fontSize: '14px',
                                    fontFamily: 'inherit',
                                    outline: 'none',
                                    boxSizing: 'border-box'
                                }}
                                rows="3"
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: '10px',
                                right: '10px',
                                fontSize: '12px',
                                color: '#8d8d9f'
                            }}>
                                {inputText.length}/{maxChars}
                            </div>
                        </div>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px'
                        }}>
                            <label style={{
                                background: '#0f3460',
                                color: 'white',
                                borderRadius: '10px',
                                padding: '15px',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '20px'
                            }}>
                                📎
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    style={{ display: 'none' }}
                                />
                            </label>

                            <button
                                onClick={handleSendMessage}
                                disabled={!inputText.trim() && !attachedFile}
                                style={{
                                    background: (!inputText.trim() && !attachedFile)
                                        ? '#4a4a5e'
                                        : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '10px',
                                    padding: '15px',
                                    cursor: (!inputText.trim() && !attachedFile) ? 'not-allowed' : 'pointer',
                                    fontSize: '20px'
                                }}
                            >
                                ➤
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ChatApp() {
    const [currentPage, setCurrentPage] = useState('home');

    return (
        <>
            {currentPage === 'home' && <HomePage onNavigate={setCurrentPage} />}
            {currentPage === 'chat' && <ChatPage onNavigate={setCurrentPage} />}
        </>
    );
}
