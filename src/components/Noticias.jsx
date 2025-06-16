import React from 'react'

function Noticias({ noticias }) {
    if (!noticias || noticias.length === 0) {
        return <div>No hay noticias para mostrar.</div>
    }

    return (
        <div style={{ padding: '2rem' }}>
            <h2>Últimas noticias</h2>
            {noticias.map((noticia, index) => (
                <div key={index} style={{
                    border: '1px solid #ccc',
                    borderRadius: '10px',
                    padding: '1rem',
                    marginBottom: '1rem',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                }}>
                    <h3>{noticia.titulo}</h3>
                    <p><strong>Autor:</strong> {noticia.autor}</p>
                    <p><strong>Resumen:</strong> {noticia.resumen}</p>
                    {/* <p><strong>Contenido:</strong> {noticia.contenido}</p> */}
                </div>
            ))}
        </div>
    )
}

export default Noticias
