import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card"; // Reutiliza tu componente Card si es posible

const HomePage = () => {
  const [dentists, setDentists] = useState([]);

  // Fetch de la API al cargar la página
  useEffect(() => {
    const fetchDentists = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setDentists(data);
      } catch (error) {
        console.error("Error fetching dentists:", error);
      }
    };

    fetchDentists();
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
