import React, { useState } from "react";
import "../styles/form.css";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [contact, setContact] = useState({
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
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-field">
          <label htmlFor="name">Nombre completo:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Ingrese su nombre completo"
            value={contact.name}
            onChange={(event) =>
              setContact({ ...contact, name: event.target.value })
            }
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="mail">Correo:</label>
          <input
            type="email"
            name="mail"
            id="mail"
            placeholder="Ingrese su correo"
            value={contact.mail}
            onChange={(event) =>
              setContact({ ...contact, mail: event.target.value })
            }
          />
          {errors.mail && <p className="error-message">{errors.mail}</p>}
        </div>

        <button type="submit" className="submit-btn">
          Contactarme
        </button>
      </form>

      {show && (
        <div className="thank-you-message">
          <p>Gracias, {contact.name}. Te contactaremos por correo.</p>
        </div>
      )}
    </div>
  );
};

export default Form;
