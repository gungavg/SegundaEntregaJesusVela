import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom';

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
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <h2>{dentist.name}</h2>
      <h3>{dentist.email}</h3>
      <h3>{dentist.phone}</h3>

    </>
  )
}

export default Detail