import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Utilidad from "../components/Utilidad.jsx";
import ResumenClaro from "../components/ResumenClaro.jsx";

function Noticia() {
    const { id } = useParams()
    const [noticia, setNoticia] = useState(null)
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        const fetchNoticia = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/noticias/por-id/${id}`, {
                    withCredentials: true
                })
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
        <div style={{ maxWidth: 800, margin: 'auto', padding: 20}}>
            <h1>{noticia.titulo}</h1>
            {
                noticia.resumen != null ?
                    <p>{noticia.resumen}</p> :
                    <p>{noticia.contenido}</p>
            }
            <p><strong>Fuente:</strong> {noticia.portal_nombre}</p>
            {
                noticia.autor != null ?
                    <p><strong>Autor:</strong> {noticia.autor}</p> :
                    <p><strong>Autor:</strong> Sin detalle</p>
            }
            <p><strong>Fecha publicación:</strong> {noticia.fecha_publicacion}</p>

            <Utilidad noticiaId={noticia.id} onValorSeleccionado={noticia.utilidad}/>
            <ResumenClaro noticiaId={noticia.id} onValorSeleccionado={noticia.resumen_claro}/>
        </div>
    )
}

export default Noticia
