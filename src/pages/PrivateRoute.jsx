import React from 'react'
import { useAuth } from '/src/context/AuthContext.jsx'
import {Navigate} from "react-router-dom";

function PrivateRoute({ children }) {
    const { user, loading } = useAuth()

    if (loading) return <div>Cargando...</div>
    if (!user) return <Navigate to="/login" replace />

    return children
}

export default PrivateRoute