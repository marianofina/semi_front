import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import PrivateRoute from './pages/PrivateRoute.jsx'
import Admin from './pages/Admin'
import {AuthProvider} from "./context/AuthContext.jsx";
import {Home} from "./pages/Home.jsx";
import Noticia from "./pages/Noticia.jsx";

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/home"
                        element={
                            <PrivateRoute>
                                <Home />
                            </PrivateRoute>
                        }
                    />
                    <Route path="/noticia/por-id/:id" element={<Noticia />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default App