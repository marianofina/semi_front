import {useEffect, useState} from 'react'
import axios from "axios";

const Estrella = ({ llena, onClick }) => (
    <span
        style={{ fontSize: '24px', cursor: 'pointer', color: llena ? 'black' : 'gray' }}
        onClick={onClick}
    >
    {llena ? '★' : '☆'}
  </span>
)

export default function ResumenClaro({ noticiaId, onValorSeleccionado }) {
    const [valor, setValor] = useState(0)
    useEffect(() => {
        if (onValorSeleccionado != null) {
            setValor(onValorSeleccionado)
        }
    }, [onValorSeleccionado])

    async function enviarResumenClaro(resumen_claro) {
        try {
            const res = await axios.put("http://localhost:8000/protected/interacciones/resumen_claro", {
                "noticia_id": noticiaId,
                "resumen_claro": resumen_claro
            },{
                withCredentials: true
            })
        } catch (err) {
            console.log(err)
        }

    }

    const manejarClick = (v) => {
        setValor(v)
        enviarResumenClaro(v)
    }

    return (
        <div style={{
            background: '#ddd',
            padding: '1rem',
            borderRadius: '1rem',
            textAlign: 'center',
            maxWidth: '300px',
            margin: 'auto'
        }}>
            <p style={{ marginBottom: '0.5rem' }}>¿Te pareció claro este resumen?</p>
            {[1, 2, 3, 4, 5].map((v) => (
                <Estrella key={v} llena={v <= valor} onClick={() => manejarClick(v)} />
            ))}
        </div>
    )
}
