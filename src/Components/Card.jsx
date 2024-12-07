import React from "react";
import { Link } from "react-router-dom";
import { useDentistStates } from "./utils/context";
import "../styles/card.css";

const Card = ({ data }) => {
  console.log(data);
  const { dispatch, state } = useDentistStates();

  const findFav = state.favs.some((fav) => fav.id === data.id);
  const toggleFav = () => {
    dispatch({ type: findFav ? "DELETE_FAV" : "ADD_FAV", payload: data });
  };
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <Link to={`/detail/${data.id}`} className="card-link">
        <img
          src="/images/doctor.jpg"
          alt={`${data.name} profile`}
          className="card-image"
        />
        <div className="card-info">
          <h3>{data.name}</h3>
          <p>{data.username}</p>
          <p>ID: {data.id}</p>
        </div>
      </Link>
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={toggleFav} className="fav-button">
        {findFav ? "🌟" : "⭐"}
      </button>
    </div>
  );
};

export default Card;
