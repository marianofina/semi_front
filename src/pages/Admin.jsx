import React, { useState } from 'react'

function Admin() {
    const [titulo, setTitulo] = useState('')
    const [contenido, setContenido] = useState('')

    const handleSubmit = () => {
        console.log('Noticia cargada:', { titulo, contenido })
        alert('Noticia subida (simulada)')
    }

    return (
        <div style={{ padding: 20 }}>
            <h1>Panel Admin</h1>
            <input placeholder="Título" value={titulo} onChange={e => setTitulo(e.target.value)} />
            <textarea placeholder="Contenido" value={contenido} onChange={e => setContenido(e.target.value)} />
            <button onClick={handleSubmit}>Subir noticia</button>
        </div>
    )
}

export default Admin