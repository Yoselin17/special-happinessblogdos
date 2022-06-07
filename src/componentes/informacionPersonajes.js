import "./Blog.css";
import { Context } from "../Store/Appcontext";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"


function InformacionPersonajes() {

    let { store, actions } = useContext(Context);
    const params = useParams();
    useEffect(() => {

        actions.getDetallePersonajes(params.id);
        console.log(store)

    }, []);

    return (

<div>
<h1>Informacion de {store.detalle.name}</h1>
<h4>Locacion de {store.detalle.location.url}</h4>
<h4>Nombre de la Locacion {store.detalle.location.name} </h4>


</div>        


    );
}

export default InformacionPersonajes;