import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card"; // Reutiliza tu componente Card si es posible
import axios from "axios";

const HomePage = () => {
  const [dentists, setDentists] = useState([]);
  const url = 'https://jsonplaceholder.typicode.com/users'

  // Fetch de la API al cargar la página
  useEffect(() => {

    axios(url).then((res)=>{
      setDentists(res.data)
    }).catch((err)=>{console.log(err);})
  }, []);

  return (
    <div className="home-page">
      <h1>Lista de Dentistas</h1>
      <div className="grid-container">
        {dentists.map(dentist => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
