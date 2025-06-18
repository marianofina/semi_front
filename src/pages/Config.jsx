import React, { useEffect, useState } from "react";
import axios from "axios";

const mapNivelResumen = (nivel) => {
    switch (nivel) {
        case 0.2:
            return "Muy resumido";
        case 0.5:
            return "Resumen promedio";
        case 0.8:
            return "Poco resumen";
        default:
            return "Nivel no definido";
    }
};

export const Config = () => {
    const [notiOn, setNotiOn] = useState(null);
    const [nivelResumen, setNivelResumen] = useState(null);
    const [mensaje, setMensaje] = useState("");
    const [guardando, setGuardando] = useState(false);

    const getConfig = async () => {
        try {
            const res = await axios.get('http://localhost:8000/protected/config-usuario', {
                withCredentials: true
            });
            setNotiOn(res.data.notificaciones_activadas);
            setNivelResumen(res.data.nivel_resumen);
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getConfig();
    }, []);

    async function configurar(notificaciones_activadas, nivel_resumen) {
        try {
            setGuardando(true);
            setMensaje("");
            await axios.post('http://localhost:8000/protected/config-usuario',
                {
                    notificaciones_activadas: notificaciones_activadas,
                    nivel_resumen: nivel_resumen
                },
                {
                    withCredentials: true
                });
            setMensaje("Configuración guardada.");
            getConfig();
        } catch (err) {
            console.log(err);
            setMensaje("Error al guardar configuración.");
        } finally {
            setGuardando(false);
        }
    }

    return (
        <div className="p-4 max-w-md mx-auto bg-white rounded-2xl shadow space-y-4">
            <h2 className="text-xl font-bold">Configuración del Usuario</h2>

            <div>
                <label className="font-medium block">Notificaciones:</label>
                {notiOn === null ? (
                    <span className="text-gray-500">Dato no disponible</span>
                ) : (
                    <button
                        onClick={() => setNotiOn(!notiOn)}
                        className={`mt-1 px-4 py-2 rounded-md text-white ${notiOn ? 'bg-green-600' : 'bg-red-600'}`}
                    >
                        {notiOn ? "Activadas" : "Desactivadas"}
                    </button>
                )}
            </div>

            <div>
                <label className="font-medium block mb-1">Nivel de resumen:</label>
                {nivelResumen === null ? (
                    <span className="text-gray-500">Dato no disponible</span>
                ) : (
                    <select
                        value={nivelResumen}
                        onChange={(e) => setNivelResumen(parseFloat(e.target.value))}
                        className="w-full border rounded-md p-2"
                    >
                        <option value={0.2}>Muy resumido</option>
                        <option value={0.5}>Resumen promedio</option>
                        <option value={0.8}>Poco resumen</option>
                    </select>
                )}
            </div>

            <button
                onClick={() => configurar(notiOn, nivelResumen)}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
                disabled={notiOn === null || nivelResumen === null || guardando}
            >
                {guardando ? "Guardando..." : "Guardar configuración"}
            </button>

            {mensaje && <p className="text-sm text-center text-gray-700">{mensaje}</p>}
        </div>
    );
};
