import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Noticia() {
    const { id } = useParams()
    const [noticia, setNoticia] = useState(null)
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        const fetchNoticia = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/noticias/por-id/${id}`)
                setNoticia(response.data)
            } catch (error) {
                console.error('Error al obtener la noticia:', error)
            } finally {
                setCargando(false)
            }
        }

        fetchNoticia()
    }, [id])

    if (cargando) return <div>Cargando noticia...</div>
    if (!noticia) return <div>No se encontró la noticia.</div>

    return (
        <div style={{ maxWidth: 800, margin: 'auto', padding: 20 }}>
            <h1>{noticia.titulo}</h1>
            <p><strong>Autor:</strong> {noticia.autor}</p>
            <p><strong>Contenido:</strong></p>
            <p>{noticia.contenido}</p>
        </div>
    )
}

export default Noticia
