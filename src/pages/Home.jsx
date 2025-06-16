import {useEffect, useState} from "react";
import axios from "axios";
import Noticias from '/src/components/Noticias.jsx'

export const Home = () => {

    const [listaNoticias, setListaNoticias] = useState([]);

    useEffect(() => {
        const getNoticias = async () => {
            try {
                const res = await axios.get('http://localhost:8000/noticias/por-usuario', {
                    withCredentials: true
                })
                setListaNoticias(res.data)
            } catch (err) {
                setListaNoticias(null)
            }
        }

        getNoticias()
    }, [])

    return (
        <Noticias noticias={listaNoticias} />
    )
}