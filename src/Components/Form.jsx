import React, { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [contact, setContac] = useState({
    name: "",
    mail: "",
  });
  const [show, setShow] = useState(false);

  const [errors, setErrors] = useState({
    name: "",
    mail: "",
  });

  const handleSubmit = (event) =>{
    event.preventDefault();
    if(validateForm()){
      setShow(true)
    }
  }

  const validateForm = () => {
    let isValid = true;
    let newErrors = { name: "", mail: "" };

    if (contact.name.length < 5) {
      newErrors.name = "Por favor verifique su informacion nuevamente"
      isValid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(contact.mail)){
      newErrors.mail = "Por favor verifique su informacion nuevamente"
      isValid = false
    }
    setErrors(newErrors)
    return isValid
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="name"> Nombre completo:</label>
      <input 
        type="text"
        name="name"
        id="name"
        placeholder="Ingrese su nombre completo"
        onChange={(event)=>
          setContac({...contact, name : event.target.value})
        }
      />
      {errors.name && <p style={{color:"red"}}>{errors.name}</p>}
      <label htmlFor="mail">Correo:</label>
      <input 
        type="mail"
        name="mail"
        id="mail"
        placeholder="Insere su correo"
        onChange={(event) =>
          setContac({...contact, mail: event.target.value})}
      />
  {errors.mail && <p style={{color: "red"}}>{errors.mail}</p>}
  <input type="submit" value="Contactenme" />

      </form>
      {show && <p>Gracias {contact.name}, te contactaremos cuando antes via mail</p>}
    </div>
  );
};

export default Form;
