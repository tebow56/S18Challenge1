import React from 'react'
import { Link } from 'react-router-dom'


function Home () {
    return (
        <>
        <h1>Bienvenido a mi página</h1>
        <p>Aquí puedes encontrar la información necesaria  acerca mi como desarrollador</p>
            <ul>
                <li><Link to={'/projects'}>Projects </Link></li>
                <li><Link to={'/resume'}> Resume</Link></li>
            </ul>
        
        </>
    )
}

export default Home