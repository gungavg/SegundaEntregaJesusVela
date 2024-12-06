import React from "react";
import Card from "../Components/Card";
import { useDentistStates } from "../Components/utils/context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useDentistStates();
  const favs = state.favs;
  

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favs.length === 0 ? (
          <p>No favoritos</p>
        ) : (
          favs.map((dentist) => (
            <Card key={dentist.id} data={dentist} />
          ))
        )}
      </div>
    </>
  );

};

export default Favs;
