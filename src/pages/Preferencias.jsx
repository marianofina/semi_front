import {useEffect, useState} from "react";
import axios from "axios";
import Preferencia from "../components/Preferencia.jsx";

export const Preferencias = () => {

    const [listaPreferencias, setListaPreferencias] = useState([]);

    const getPreferenciasTotal = async () => {
        try {
            const res = await axios.get('http://localhost:8000/protected/preferencias/total', {
                withCredentials: true
            })
            setListaPreferencias(res.data)
            console.log(listaPreferencias)
        } catch (err) {
            setListaPreferencias(null)
        }
    }

    useEffect(() => {
        getPreferenciasTotal()
    }, [])


    async function nuevaPreferencia(tematica_id, interesa) {
        try {
            const res = await axios.post('http://localhost:8000/protected/preferencias',
                {
                    tematica_id: tematica_id,
                    interesa: interesa
                },
                {
                    withCredentials: true
                })
            getPreferenciasTotal()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            {listaPreferencias.map((t) => (
                <div key={t.id} onClick={() => nuevaPreferencia(t.id, t.interesa ? 0 : 1)}>
                    <Preferencia t={t} />
                </div>
            ))}
        </div>
    )
}