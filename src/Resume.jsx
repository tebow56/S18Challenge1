import {Link} from 'react-router-dom'
import { studies, experiences } from './data/resume'



function Resume () {
 
    return (
        <>
         <h1>Estudios</h1>
        {studies && studies.map((study)=>{
            return (
            <>
            <ul>
                <ul key={study.id}>
                    <li>ID: {study.id}</li>
                    <li>Título : {study.title}</li>
                    <li>Institución: {study.institution}</li>
                    <li>Año: {study.date} </li>
                </ul>
            </ul>
            </>
            )})}  

            <h1>Experiencia laboral</h1>
        {experiences && experiences.map((experience)=>{
            return ( 
            <>
            <ul>
                <ul key={experience.id}>
                    <li>ID: {experience.id}</li>
                    <li>Puesto : {experience.title}</li>
                    <li>Empresa: {experience.company}</li>
                    <li>Año: {experience.date} </li>
                </ul>
            </ul>
            </>
            )})}   


        </>
    )
}

export default Resume