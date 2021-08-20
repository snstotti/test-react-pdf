import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav className="nav bg-light justify-content-center">
            <Link className="nav-link active" aria-current="page" to="/home">Главная</Link>
            <Link className="nav-link" to="/create-pdf">Создать PDF файл</Link>
            
        </nav>
    )
}
