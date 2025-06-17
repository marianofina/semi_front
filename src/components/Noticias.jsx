import React from 'react'
import {NoticiaItem} from "./NoticiaItem.jsx";


function Noticias({ noticias }) {
    if (!noticias || noticias.length === 0) {
        return <div>No hay noticias para mostrar.</div>
    }

    let hoy = new Date();

    const noticiasHoy = noticias.filter(n => {
        const fechaCorrecta = n.fecha_publicacion.slice(0, 23);
        const fecha = new Date(fechaCorrecta);
        return fecha.getFullYear() === hoy.getFullYear() &&
            fecha.getMonth() === hoy.getMonth() &&
            fecha.getDate() === hoy.getDate();
    });


    return (
        <div style={{ padding: '2rem' }}>
            <h2>Últimas noticias</h2>
            {noticiasHoy.map(n => (
                <NoticiaItem key={n.id} n={n} />
            ))}
        </div>
    );
}

export default Noticias
