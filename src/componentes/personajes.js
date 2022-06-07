
import "./Blog.css";
import { useContext, useEffect } from "react";
import { Context } from "../Store/Appcontext";
import { Link } from "react-router-dom";




function Personajes() {
    //using flux
    const { store, actions } = useContext(Context);
    //States
    useEffect(() => {
        actions.getPersonajes();
    }, [])

function meGusta () {

}

    console.log("store", store);
    
    return (

        <div>
            {!!store.personajes && store.personajes.map(
                (personaje, index) => {

                    return (
                        <>


                            <div className="card">
                                <img src={personaje.image} className="card-img-top" alt="..." />
                                <div className="card-body">

                                    <Link to={`${`/detalles/personajes/${personaje.id}`}`} className="btn btn-primary">Ver personajes</Link>
                                    <button className="btn" onClick={() => meGusta()}></button>


                                    <p className="card-text">Especie: {personaje.species}</p>
                                    <p className="card-text">Status: {personaje.status}</p>
                                    <p className="card-text">Sexo: {personaje.gender}</p>
                                    <button className='btn' onClick={() => actions.meGusta(personaje.name)}>Me gusta</button>
                                    <button className='btn' onClick={() => actions.eliminarMegusta(personaje.name)}>eliminarMegusta</button>
                                </div>
                            </div>

                        </>

                    )
                }
            )}

        </div>);
}



export default Personajes;
