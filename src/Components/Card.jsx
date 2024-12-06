import React from "react";
import { Link } from "react-router-dom";
import {useDentistStates} from "./utils/context"


const Card = ({ data}) => {
  console.log(data);
  const {dispatch, state} = useDentistStates();

  const findFav = state.favs.some((fav) => fav.id === data.id);
  const toggleFav = () => { 
    dispatch({ type: findFav ? "DELETE_FAV" : "ADD_FAV", payload: data });
  }
  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={`/detail/${data.id}`}>        
          <div>Nombre: {data.name} </div>
        </Link>
        <div> Nombre de usuario: {data.username}</div>
        <div> ID: {data.id} </div>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={toggleFav}>{findFav ? "🌟" : "⭐"}</button>
        </div>
  );
};

export default Card;
