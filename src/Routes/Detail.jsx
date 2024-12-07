import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom';
import "../styles/detail.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [dentist, setDentist] = useState({});
  const {id} = useParams();
  console.log(id);
  const url = `https://jsonplaceholder.typicode.com/users/${id}`

  useEffect(() => {
    axios(url).then((res)=>{
      console.log(res.data);
      setDentist(res.data)
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  return (
    <>
      <div className="detail-container">
      <h1>Detalle del Dentista - ID: {id}</h1>
      <table className="dentist-details">
        <thead>
          <tr>
            <th>Información</th>
            <th>Detalle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Nombre</strong></td>
            <td>{dentist.name}</td>
          </tr>
          <tr>
            <td><strong>Email</strong></td>
            <td>{dentist.email}</td>
          </tr>
          <tr>
            <td><strong>Teléfono</strong></td>
            <td>{dentist.phone}</td>
          </tr>
          <tr>
            <td><strong>Sitio web</strong></td>
            <td>{dentist.website}</td>
          </tr>
        </tbody>
      </table>
    </div>

    </>
  )
}

export default Detail