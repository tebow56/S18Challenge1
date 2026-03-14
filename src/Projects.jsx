import {Link} from 'react-router-dom'
import projects from './data/projects'


console.log(projects)
function Projects () {
 
    return (
        <>
         <h1>Proyectos</h1>
        {projects && projects.map((proyecto)=>{
            return (
            <>
            <ul>
                <ul key={proyecto.id}>
                    <li>ID: {proyecto.id}</li>
                    <li>Nombre: {proyecto.name}</li>
                    <li>Imagen: <img src={proyecto.image} alt={proyecto.name} /></li>
                    <li>Descripción: {proyecto.description}</li>
                    <li><Link to={proyecto.url}>Link</Link></li>
                </ul>
            </ul>
            </>
            )
        }
    
    )
}   
</>
    )
}

export default Projects