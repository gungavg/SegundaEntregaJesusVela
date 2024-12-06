import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { routes } from './utils/routes' 
import "../styles/navbar.css"
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.className = newTheme;
  };

  return (
    <nav className='navbar'>
      <div className="navbar-logo">
        <h3>DH Odonto</h3>
      </div>

      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div className="navbar-links">
        <Link to={routes.home}>
          <h4>Inicio</h4>
        </Link>
        <Link to={routes.contact}>
          <h4>Contacto</h4>
        </Link>
        <Link to={routes.favs}>
          <h4>Favoritos</h4>
        </Link>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button onClick={toggleTheme}>Change theme</button>
      </div>
    </nav>
  )
}

export default Navbar