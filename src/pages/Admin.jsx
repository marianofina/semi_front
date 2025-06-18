import React, { useEffect, useState } from 'react';
import axios from "axios";

function Admin() {
    const [titulo, setTitulo] = useState('');
    const [contenido, setContenido] = useState('');
    const [portal_id, setPortal_id] = useState(-1);
    const [tematica_id, setTematica_id] = useState(-1);
    const [autor, setAutor] = useState('');

    const [listaPortales, setListaPortales] = useState([]);
    const [listaTematicas, setListaTematicas] = useState([]);

    useEffect(() => {
        getPortalesTotal();
        getTematicas();
    }, []);

    const getPortalesTotal = async () => {
        try {
            const res = await axios.get('http://127.0.0.1:8000/portales');
            setListaPortales(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const getTematicas = async () => {
        try {
            const res = await axios.get('http://127.0.0.1:8000/tematicas');
            setListaTematicas(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    async function handleSubmit() {
        try {
            const res = await axios.post('http://127.0.0.1:8000/noticias', {
                titulo,
                contenido,
                portal_id,
                tematica_id,
                autor,
                admin_id: null
            });
            console.log(res)
            alert("Noticia subida correctamente");
        } catch (err) {
            console.log(err);
            alert("Error al subir noticia");
        }
    }

    return (
        <div style={{ padding: 20, maxWidth: 600, margin: '0 auto' }}>
            <h1>Panel Admin</h1>
            <div>
                <input
                    placeholder="Título"
                    value={titulo}
                    onChange={e => setTitulo(e.target.value)}
                    className="w-full border p-2 rounded mb-3"
                />
            </div>
            <div>
                <textarea
                    placeholder="Contenido"
                    value={contenido}
                    onChange={e => setContenido(e.target.value)}
                    className="w-full border p-2 rounded mb-3"
                    rows={6}
                />
            </div>
            <div>
                <input
                    placeholder="Autor"
                    value={autor}
                    onChange={e => setAutor(e.target.value)}
                    className="w-full border p-2 rounded mb-3"
                />
            </div>
            <div className="mb-3">
                <label className="block font-medium mb-1">Portal:</label>
                <select
                    value={portal_id}
                    onChange={e => setPortal_id(parseInt(e.target.value))}
                    className="w-full border p-2 rounded"
                >
                    <option value={-1} disabled>Seleccioná un portal</option>
                    {listaPortales.map(portal => (
                        <option key={portal.id} value={portal.id}>{portal.nombre}</option>
                    ))}
                </select>
            </div>

            <div className="mb-3">
                <label className="block font-medium mb-1">Temática:</label>
                <select
                    value={tematica_id}
                    onChange={e => setTematica_id(parseInt(e.target.value))}
                    className="w-full border p-2 rounded"
                >
                    <option value={-1} disabled>Seleccioná una temática</option>
                    {listaTematicas.map(tem => (
                        <option key={tem.id} value={tem.id}>{tem.nombre}</option>
                    ))}
                </select>
            </div>

            <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                disabled={portal_id === -1 || tematica_id === -1}
            >
                Subir noticia
            </button>
        </div>
    );
}

export default Admin;
