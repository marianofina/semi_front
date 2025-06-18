import React from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";


export const NoticiaItem = ({n}) => {
    const navigate = useNavigate()
    async function interactuar(noticia_id) {
        try {
            const res = await axios.post("http://localhost:8000/protected/interacciones", {
                "noticia_id": noticia_id
            }, {
                withCredentials: true
            })
            navigate(`/noticia/por-id/${n.id}`)
            console.log(res)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div key={n.id} style={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '1rem',
            marginBottom: '1rem',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            color: n.fecha_leido != null ? 'grey' : 'black'
        }}
             onClick={() => interactuar(n.id)}>
            <span>{n.fecha_publicacion.split("T")[1].substring(0, 5)}</span>
            <span> - </span>
            <span>{n.tematica_nombre}</span>
            <h3>{n.titulo}</h3>
            <span>{Math.round((n.contenido.length * n.nivel_resumen) / 900)} min</span>
            {
                n.fecha_leido != null ?
                    <span> - Leído</span> :
                    null
            }
        </div>
    )
}